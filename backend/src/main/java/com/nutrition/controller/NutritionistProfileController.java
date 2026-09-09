package com.nutrition.controller;

import com.nutrition.entity.NutritionistProfile;
import com.nutrition.entity.User;
import com.nutrition.repository.NutritionistProfileRepository;
import com.nutrition.repository.UserRepository;
import com.nutrition.security.CustomUserDetails;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/nutritionist/profile")
@RequiredArgsConstructor
public class NutritionistProfileController {

    private final NutritionistProfileRepository nutritionistProfileRepository;
    private final UserRepository userRepository;

    @GetMapping
    public ResponseEntity<?> getProfile() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        CustomUserDetails userDetails = (CustomUserDetails) authentication.getPrincipal();

        NutritionistProfile profile = nutritionistProfileRepository.findByUserId(userDetails.getId())
                .orElse(null);

        if (profile == null) {
            return ResponseEntity.notFound().build();
        }

        return ResponseEntity.ok(profile);
    }

    @PutMapping
    public ResponseEntity<?> updateProfile(@RequestBody Map<String, String> body) {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        CustomUserDetails userDetails = (CustomUserDetails) authentication.getPrincipal();

        NutritionistProfile profile = nutritionistProfileRepository.findByUserId(userDetails.getId())
                .orElseThrow(() -> new RuntimeException("Profile not found"));

        if (body.containsKey("credentials")) {
            profile.setCredentials(body.get("credentials"));
        }
        if (body.containsKey("specialization")) {
            profile.setSpecialization(body.get("specialization"));
        }

        if (body.containsKey("firstName") || body.containsKey("lastName")) {
            User user = profile.getUser();
            if (body.containsKey("firstName")) user.setFirstName(body.get("firstName"));
            if (body.containsKey("lastName")) user.setLastName(body.get("lastName"));
            userRepository.save(user);
        }

        return ResponseEntity.ok(nutritionistProfileRepository.save(profile));
    }
}
