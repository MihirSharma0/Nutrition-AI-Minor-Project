package com.nutrition.dto;

import lombok.Data;
import java.time.LocalDateTime;

@Data
public class NutritionRuleDto {
    private Long id;
    private String ruleKey;
    private Double ruleValue;
    private String description;
    private LocalDateTime updatedAt;
}
