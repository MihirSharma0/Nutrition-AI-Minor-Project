package com.nutrition.entity;

import jakarta.persistence.*;
import lombok.Data;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;
import java.time.LocalDateTime;

@Entity
@Table(name = "user_profiles")
@Data
public class UserProfile {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id", nullable = false, unique = true)
    private User user;

    private Double heightCm;
    private Double weightKg;
    private Double targetWeightKg;
    private String activityLevel;
    private String dietaryPreferences;
    private String allergies;
    
    // New fields
    private Integer age;
    private String gender;
    private String goal;
    private String dietType;
    private String lifestyleClass;
    private String mealBudget;
    private String favoriteFoods;
    private String dislikedFoods;

    // Recalculated target fields
    private Double bmr;
    private Double tdee;
    private Integer dailyCaloriesTarget;
    private Integer proteinTarget;
    private Integer carbsTarget;
    private Integer fatsTarget;

    @CreationTimestamp
    private LocalDateTime createdAt;

    @UpdateTimestamp
    private LocalDateTime updatedAt;
}
