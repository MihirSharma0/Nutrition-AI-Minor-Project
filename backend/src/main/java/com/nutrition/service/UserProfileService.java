package com.nutrition.service;

import com.nutrition.dto.UserProfileDto;
import com.nutrition.entity.User;
import com.nutrition.entity.UserProfile;
import com.nutrition.repository.UserProfileRepository;
import com.nutrition.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserProfileService {

    private final UserProfileRepository userProfileRepository;
    private final UserRepository userRepository;

    public UserProfileDto getProfile(Long userId) {
        UserProfile profile = userProfileRepository.findByUserId(userId)
            .orElseGet(() -> createEmptyProfile(userId));
        return mapToDto(profile);
    }

    public UserProfileDto updateProfile(Long userId, UserProfileDto dto) {
        UserProfile profile = userProfileRepository.findByUserId(userId)
            .orElseGet(() -> createEmptyProfile(userId));

        profile.setHeightCm(dto.getHeightCm());
        profile.setWeightKg(dto.getWeightKg());
        profile.setTargetWeightKg(dto.getTargetWeightKg());
        profile.setActivityLevel(dto.getActivityLevel());
        profile.setDietaryPreferences(dto.getDietaryPreferences());
        profile.setAllergies(dto.getAllergies());

        profile = userProfileRepository.save(profile);
        return mapToDto(profile);
    }

    private UserProfile createEmptyProfile(Long userId) {
        User user = userRepository.findById(userId).orElseThrow(() -> new RuntimeException("User not found"));
        UserProfile profile = new UserProfile();
        profile.setUser(user);
        return userProfileRepository.save(profile);
    }

    private UserProfileDto mapToDto(UserProfile profile) {
        UserProfileDto dto = new UserProfileDto();
        dto.setId(profile.getId());
        dto.setUserId(profile.getUser().getId());
        dto.setHeightCm(profile.getHeightCm());
        dto.setWeightKg(profile.getWeightKg());
        dto.setTargetWeightKg(profile.getTargetWeightKg());
        dto.setActivityLevel(profile.getActivityLevel());
        dto.setDietaryPreferences(profile.getDietaryPreferences());
        dto.setAllergies(profile.getAllergies());
        dto.setUpdatedAt(profile.getUpdatedAt());
        return dto;
    }
}
