package com.nutrition.controller;

import com.nutrition.dto.DietPlanDto;
import com.nutrition.security.CustomUserDetails;
import com.nutrition.service.DietPlanService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/diet-plans")
@RequiredArgsConstructor
public class DietPlanController {

    private final DietPlanService dietPlanService;

    @GetMapping("/me")
    public ResponseEntity<List<DietPlanDto>> getMyDietPlans(@AuthenticationPrincipal CustomUserDetails userDetails) {
        return ResponseEntity.ok(dietPlanService.getMyDietPlans(userDetails.getId()));
    }

    @GetMapping("/me/latest")
    public ResponseEntity<DietPlanDto> getLatestDietPlan(@AuthenticationPrincipal CustomUserDetails userDetails) {
        DietPlanDto dto = dietPlanService.getLatestDietPlan(userDetails.getId());
        if (dto == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(dto);
    }

    @PostMapping("/me/generate-mock")
    public ResponseEntity<DietPlanDto> generateMockDietPlan(
            @AuthenticationPrincipal CustomUserDetails userDetails,
            @RequestBody DietPlanDto dto) {
        return ResponseEntity.ok(dietPlanService.generateMockDietPlan(userDetails.getId(), dto));
    }
}
