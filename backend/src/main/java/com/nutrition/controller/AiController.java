package com.nutrition.controller;

import com.nutrition.service.AiService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/ai")
@RequiredArgsConstructor
public class AiController {

    private final AiService aiService;

    @PostMapping("/diet-plan")
    public ResponseEntity<Map<String, String>> generateDietPlan(@RequestBody Map<String, String> request) {
        String plan = aiService.generateDietPlan(request.get("goals"), request.get("allergies"));
        return ResponseEntity.ok(Map.of("plan", plan));
    }

    @PostMapping("/chat")
    public ResponseEntity<Map<String, String>> chat(@RequestBody Map<String, String> request) {
        String response = aiService.chat(request.get("message"));
        return ResponseEntity.ok(Map.of("response", response));
    }

    @PostMapping("/analyze-image")
    public ResponseEntity<Map<String, String>> analyzeImage(@RequestBody Map<String, String> request) {
        String analysis = aiService.analyzeFoodImage(request.get("imageUrl"));
        return ResponseEntity.ok(Map.of("analysis", analysis));
    }
}
