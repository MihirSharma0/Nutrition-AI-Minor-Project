package com.nutrition.service;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class AiService {

    @Value("${openai.api.key:mock-key}")
    private String apiKey;

    private final RestTemplate restTemplate = new RestTemplate();
    private final String OPENAI_API_URL = "https://api.openai.com/v1/chat/completions";

    public String generateDietPlan(String goals, String allergies) {
        if ("mock-key".equals(apiKey)) {
            return "Mock AI Diet Plan: Based on your goals (" + goals + ") and allergies (" + allergies + "), eat more greens and lean proteins. This is a mock response because the OpenAI API key is missing.";
        }
        
        String prompt = String.format("Create a 1-day diet plan for a user with goals: %s, and allergies: %s.", goals, allergies);
        return callOpenAi(prompt);
    }
    
    public String chat(String message) {
        if ("mock-key".equals(apiKey)) {
            return "Mock AI Chatbot: Hello! I'm your mock nutrition assistant. (Configure openai.api.key to get real responses)";
        }
        return callOpenAi("You are a helpful nutrition assistant. User says: " + message);
    }
    
    public String analyzeFoodImage(String imageUrl) {
        if ("mock-key".equals(apiKey)) {
            return "Mock AI Image Analysis: The uploaded image looks like a healthy meal containing approximately 450 calories, high in protein.";
        }
        // Simplified for text; real vision API payload would be different
        return callOpenAi("Analyze this food image URL and estimate calories: " + imageUrl);
    }

    private String callOpenAi(String prompt) {
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        headers.setBearerAuth(apiKey);

        Map<String, Object> body = new HashMap<>();
        body.put("model", "gpt-3.5-turbo");
        body.put("messages", List.of(Map.of("role", "user", "content", prompt)));

        HttpEntity<Map<String, Object>> request = new HttpEntity<>(body, headers);

        try {
            ResponseEntity<Map> response = restTemplate.postForEntity(OPENAI_API_URL, request, Map.class);
            List<Map<String, Object>> choices = (List<Map<String, Object>>) response.getBody().get("choices");
            Map<String, Object> message = (Map<String, Object>) choices.get(0).get("message");
            return (String) message.get("content");
        } catch (Exception e) {
            System.err.println("Error calling OpenAI: " + e.getMessage());
            return "Error generating AI response.";
        }
    }
}
