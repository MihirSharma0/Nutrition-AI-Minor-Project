package com.nutrition.controller;

import com.nutrition.dto.UserProfileDto;
import com.nutrition.security.CustomUserDetails;
import com.nutrition.service.UserProfileService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/profiles")
@RequiredArgsConstructor
public class UserProfileController {

    private final UserProfileService userProfileService;

    @GetMapping("/me")
    public ResponseEntity<UserProfileDto> getMyProfile(@AuthenticationPrincipal CustomUserDetails userDetails) {
        return ResponseEntity.ok(userProfileService.getProfile(userDetails.getId()));
    }

    @PutMapping("/me")
    public ResponseEntity<UserProfileDto> updateMyProfile(
            @AuthenticationPrincipal CustomUserDetails userDetails,
            @RequestBody UserProfileDto dto) {
        return ResponseEntity.ok(userProfileService.updateProfile(userDetails.getId(), dto));
    }
}
