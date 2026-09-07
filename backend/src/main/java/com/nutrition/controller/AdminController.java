package com.nutrition.controller;

import com.nutrition.entity.NutritionistProfile;
import com.nutrition.entity.Role;
import com.nutrition.entity.User;
import com.nutrition.repository.NutritionistProfileRepository;
import com.nutrition.repository.UserRepository;
import com.nutrition.service.SystemSettingService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/admin")
@RequiredArgsConstructor
public class AdminController {

    private final UserRepository userRepository;
    private final NutritionistProfileRepository nutritionistProfileRepository;
    private final SystemSettingService systemSettingService;

    @GetMapping("/users")
    public ResponseEntity<List<User>> getAllUsers() {
        return ResponseEntity.ok(userRepository.findByRole(Role.USER));
    }

    @GetMapping("/nutritionists")
    public ResponseEntity<List<User>> getAllNutritionists() {
        return ResponseEntity.ok(userRepository.findByRole(Role.NUTRITIONIST));
    }
    
    @PutMapping("/users/{id}/role")
    public ResponseEntity<User> updateUserRole(@PathVariable Long id, @RequestBody Map<String, String> body) {
        User user = userRepository.findById(id).orElseThrow(() -> new RuntimeException("User not found"));
        user.setRole(Role.valueOf(body.get("role").toUpperCase()));
        return ResponseEntity.ok(userRepository.save(user));
    }

    @DeleteMapping("/users/{id}")
    public ResponseEntity<Void> deleteUser(@PathVariable Long id) {
        userRepository.deleteById(id);
        return ResponseEntity.noContent().build();
    }
    
    @PutMapping("/nutritionists/{id}/approve")
    public ResponseEntity<NutritionistProfile> approveNutritionist(@PathVariable Long id) {
        NutritionistProfile profile = nutritionistProfileRepository.findByUserId(id)
                .orElseThrow(() -> new RuntimeException("Nutritionist profile not found"));
        profile.setApprovalStatus("APPROVED");
        
        // Also verify the user
        User user = profile.getUser();
        user.setVerified(true);
        userRepository.save(user);

        return ResponseEntity.ok(nutritionistProfileRepository.save(profile));
    }

    @PostMapping("/settings/otp")
    public ResponseEntity<Map<String, Boolean>> toggleOtp(@RequestBody Map<String, Boolean> body) {
        Boolean enabled = body.get("enabled");
        if (enabled != null) {
            systemSettingService.setOtpEnabled(enabled);
        }
        return ResponseEntity.ok(Map.of("otpEnabled", systemSettingService.isOtpEnabled()));
    }

    @GetMapping("/analytics")
    public ResponseEntity<Map<String, Object>> getAnalytics() {
        Map<String, Object> stats = new HashMap<>();
        stats.put("totalUsers", userRepository.findByRole(Role.USER).size());
        stats.put("totalNutritionists", userRepository.findByRole(Role.NUTRITIONIST).size());
        // Mock revenue and appointments
        stats.put("totalRevenue", 15200);
        stats.put("totalAppointments", 145);
        return ResponseEntity.ok(stats);
    }
}
