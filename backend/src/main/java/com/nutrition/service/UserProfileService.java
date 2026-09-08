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
        
        profile.setAge(dto.getAge());
        profile.setGender(dto.getGender());
        profile.setGoal(dto.getGoal());
        profile.setDietType(dto.getDietType());
        profile.setLifestyleClass(dto.getLifestyleClass());
        profile.setMealBudget(dto.getMealBudget());
        profile.setFavoriteFoods(dto.getFavoriteFoods());
        profile.setDislikedFoods(dto.getDislikedFoods());

        recalculateNutritionTargets(profile);

        profile = userProfileRepository.save(profile);
        return mapToDto(profile);
    }

    private UserProfile createEmptyProfile(Long userId) {
        User user = userRepository.findById(userId).orElseThrow(() -> new RuntimeException("User not found"));
        UserProfile profile = new UserProfile();
        profile.setUser(user);
        return userProfileRepository.save(profile);
    }

    private void recalculateNutritionTargets(UserProfile profile) {
        if (profile.getAge() == null || profile.getHeightCm() == null || profile.getWeightKg() == null || profile.getGender() == null) {
            return;
        }

        double bmr = 10 * profile.getWeightKg() + 6.25 * profile.getHeightCm() - 5 * profile.getAge();
        if ("Female".equalsIgnoreCase(profile.getGender())) {
            bmr -= 161;
        } else {
            bmr += 5;
        }
        profile.setBmr(bmr);

        double multiplier = 1.2;
        if (profile.getActivityLevel() != null) {
            switch (profile.getActivityLevel()) {
                case "Lightly Active": multiplier = 1.375; break;
                case "Moderately Active": multiplier = 1.55; break;
                case "Very Active": multiplier = 1.725; break;
                case "Highly Active-Athlete": multiplier = 1.9; break;
            }
        }
        double tdee = bmr * multiplier;
        profile.setTdee(tdee);

        int calories = (int) tdee;
        if (profile.getGoal() != null) {
            switch (profile.getGoal()) {
                case "Weight Loss": calories -= 500; break;
                case "Muscle Gain": calories += 500; break;
                case "Strength-Performance": calories += 300; break;
            }
        }
        profile.setDailyCaloriesTarget(calories);

        profile.setProteinTarget((int) ((calories * 0.30) / 4));
        profile.setCarbsTarget((int) ((calories * 0.40) / 4));
        profile.setFatsTarget((int) ((calories * 0.30) / 9));
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
        
        dto.setAge(profile.getAge());
        dto.setGender(profile.getGender());
        dto.setGoal(profile.getGoal());
        dto.setDietType(profile.getDietType());
        dto.setLifestyleClass(profile.getLifestyleClass());
        dto.setMealBudget(profile.getMealBudget());
        dto.setFavoriteFoods(profile.getFavoriteFoods());
        dto.setDislikedFoods(profile.getDislikedFoods());

        dto.setBmr(profile.getBmr());
        dto.setTdee(profile.getTdee());
        dto.setDailyCaloriesTarget(profile.getDailyCaloriesTarget());
        dto.setProteinTarget(profile.getProteinTarget());
        dto.setCarbsTarget(profile.getCarbsTarget());
        dto.setFatsTarget(profile.getFatsTarget());
        
        dto.setUpdatedAt(profile.getUpdatedAt());
        return dto;
    }
}
