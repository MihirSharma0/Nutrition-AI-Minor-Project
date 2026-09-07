package com.nutrition.service;

import com.nutrition.dto.LoginRequest;
import com.nutrition.dto.RegisterRequest;
import com.nutrition.entity.NutritionistProfile;
import com.nutrition.entity.PasswordResetToken;
import com.nutrition.entity.Role;
import com.nutrition.entity.User;
import com.nutrition.entity.VerificationToken;
import com.nutrition.repository.NutritionistProfileRepository;
import com.nutrition.repository.PasswordResetTokenRepository;
import com.nutrition.repository.UserRepository;
import com.nutrition.repository.VerificationTokenRepository;
import com.nutrition.security.JwtUtils;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.UUID;
import java.util.Random;

@Service
@RequiredArgsConstructor
public class AuthService {

    private final AuthenticationManager authenticationManager;
    private final UserRepository userRepository;
    private final VerificationTokenRepository verificationTokenRepository;
    private final PasswordResetTokenRepository passwordResetTokenRepository;
    private final NutritionistProfileRepository nutritionistProfileRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtUtils jwtUtils;
    private final MailService mailService;
    private final EmailService emailService;
    private final SystemSettingService systemSettingService;

    public String authenticateUser(LoginRequest loginRequest) {
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(loginRequest.getEmail(), loginRequest.getPassword()));

        SecurityContextHolder.getContext().setAuthentication(authentication);
        return jwtUtils.generateJwtToken(authentication);
    }

    public void registerUser(RegisterRequest signUpRequest) {
        User existingUser = userRepository.findByEmail(signUpRequest.getEmail()).orElse(null);
        if (existingUser != null) {
            if (existingUser.isVerified()) {
                throw new RuntimeException("Error: Email is already in use!");
            } else {
                // User exists but is not verified. Delete the old unverified record so they can register again.
                // Cascading will handle related tokens or profiles.
                userRepository.delete(existingUser);
                userRepository.flush(); // ensure deletion before inserting new record with same email
            }
        }

        User user = new User();
        user.setFirstName(signUpRequest.getFirstName());
        user.setLastName(signUpRequest.getLastName());
        user.setEmail(signUpRequest.getEmail());
        user.setPasswordHash(passwordEncoder.encode(signUpRequest.getPassword()));
        
        Role userRole = Role.USER;
        if (signUpRequest.getRole() != null) {
            try {
                userRole = Role.valueOf(signUpRequest.getRole().toUpperCase());
            } catch (IllegalArgumentException e) {
                userRole = Role.USER;
            }
        }
        user.setRole(userRole);
        user.setVerified(false); 

        user = userRepository.save(user);

        if (userRole == Role.NUTRITIONIST) {
            NutritionistProfile profile = new NutritionistProfile();
            profile.setUser(user);
            profile.setCredentials(signUpRequest.getCredentials() != null ? signUpRequest.getCredentials() : "N/A");
            profile.setSpecialization(signUpRequest.getSpecialization() != null ? signUpRequest.getSpecialization() : "General");
            nutritionistProfileRepository.save(profile);
        }

        if (systemSettingService.isOtpEnabled()) {
            String otp = String.format("%06d", new Random().nextInt(999999));
            user.setOtpCode(otp);
            user.setOtpExpiryDate(LocalDateTime.now().plusMinutes(15));
            userRepository.save(user);
            
            try {
                emailService.sendOtpVerificationEmail(user.getEmail(), user.getFirstName(), otp);
            } catch(Exception e) {
                System.err.println("Failed to send OTP email: " + e.getMessage());
            }
        } else {
            // Generate Verification Token
            String token = UUID.randomUUID().toString();
            VerificationToken verificationToken = new VerificationToken();
            verificationToken.setToken(token);
            verificationToken.setUser(user);
            verificationToken.setExpiryDate(LocalDateTime.now().plusHours(24));
            verificationTokenRepository.save(verificationToken);

            mailService.sendVerificationEmail(user.getEmail(), token);
        }
    }

    public boolean verifyEmail(String token) {
        VerificationToken verificationToken = verificationTokenRepository.findByToken(token).orElse(null);
        if (verificationToken == null || verificationToken.getExpiryDate().isBefore(LocalDateTime.now())) {
            return false;
        }

        User user = verificationToken.getUser();
        user.setVerified(true);
        userRepository.save(user);
        verificationTokenRepository.delete(verificationToken);
        return true;
    }

    public boolean verifyOtp(String email, String otp) {
        User user = userRepository.findByEmail(email).orElse(null);
        if (user == null || user.getOtpCode() == null || !user.getOtpCode().equals(otp)) {
            return false;
        }
        if (user.getOtpExpiryDate() == null || user.getOtpExpiryDate().isBefore(LocalDateTime.now())) {
            return false;
        }
        user.setVerified(true);
        user.setOtpCode(null);
        user.setOtpExpiryDate(null);
        userRepository.save(user);

        try {
            emailService.sendAccountVerifiedEmail(user.getEmail(), user.getFirstName());
        } catch(Exception e) {
            System.err.println("Failed to send account verified email: " + e.getMessage());
        }

        return true;
    }

    public void resendOtp(String email) {
        User user = userRepository.findByEmail(email).orElse(null);
        if (user != null && !user.isVerified() && systemSettingService.isOtpEnabled()) {
            String otp = String.format("%06d", new Random().nextInt(999999));
            user.setOtpCode(otp);
            user.setOtpExpiryDate(LocalDateTime.now().plusMinutes(15));
            userRepository.save(user);
            
            try {
                emailService.sendOtpVerificationEmail(user.getEmail(), user.getFirstName(), otp);
            } catch(Exception e) {
                System.err.println("Failed to resend OTP email: " + e.getMessage());
            }
        }
    }

    public boolean changePassword(Long userId, String currentPassword, String newPassword) {
        User user = userRepository.findById(userId).orElseThrow(() -> new RuntimeException("User not found"));
        if (!passwordEncoder.matches(currentPassword, user.getPasswordHash())) {
            return false;
        }
        user.setPasswordHash(passwordEncoder.encode(newPassword));
        userRepository.save(user);
        return true;
    }

    public void requestPasswordReset(String email) {
        User user = userRepository.findByEmail(email).orElse(null);
        if (user != null) {
            String token = UUID.randomUUID().toString();
            PasswordResetToken resetToken = new PasswordResetToken();
            resetToken.setToken(token);
            resetToken.setUser(user);
            resetToken.setExpiryDate(LocalDateTime.now().plusHours(1));
            passwordResetTokenRepository.save(resetToken);

            mailService.sendPasswordResetEmail(user.getEmail(), token);
        }
    }

    public boolean resetPassword(String token, String newPassword) {
        PasswordResetToken resetToken = passwordResetTokenRepository.findByToken(token).orElse(null);
        if (resetToken == null || resetToken.getExpiryDate().isBefore(LocalDateTime.now())) {
            return false;
        }

        User user = resetToken.getUser();
        user.setPasswordHash(passwordEncoder.encode(newPassword));
        userRepository.save(user);
        passwordResetTokenRepository.delete(resetToken);
        return true;
    }
}
