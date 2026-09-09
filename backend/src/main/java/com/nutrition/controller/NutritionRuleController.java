package com.nutrition.controller;

import com.nutrition.dto.NutritionRuleDto;
import com.nutrition.service.NutritionRuleService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/admin/nutrition-rules")
@RequiredArgsConstructor
public class NutritionRuleController {

    private final NutritionRuleService nutritionRuleService;

    @GetMapping
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<List<NutritionRuleDto>> getAllRules() {
        return ResponseEntity.ok(nutritionRuleService.getAllRules());
    }

    @PutMapping("/{id}")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<NutritionRuleDto> updateRule(@PathVariable Long id, @RequestBody NutritionRuleDto dto) {
        return ResponseEntity.ok(nutritionRuleService.updateRule(id, dto));
    }
}
