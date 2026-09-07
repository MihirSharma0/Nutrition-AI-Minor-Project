package com.nutrition.dto;

import lombok.Data;
import java.time.LocalDateTime;

@Data
public class UserProfileDto {
    private Long id;
    private Long userId;
    private Double heightCm;
    private Double weightKg;
    private Double targetWeightKg;
    private String activityLevel;
    private String dietaryPreferences;
    private String allergies;
    private LocalDateTime updatedAt;
}
