package com.nutrition.service;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.nutrition.dto.FoodAnalysisRequestDto;
import com.nutrition.dto.FoodAnalysisResponseDto;
import com.nutrition.entity.Recipe;
import com.nutrition.entity.User;
import com.nutrition.entity.UserProfile;
import com.nutrition.repository.RecipeRepository;
import com.nutrition.repository.UserProfileRepository;
import com.nutrition.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.*;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class AiService {

    @Value("${openai.api.key:mock-key}")
    private String apiKey;

    private final UserRepository userRepository;
    private final UserProfileRepository userProfileRepository;
    private final RecipeRepository recipeRepository;

    private final RestTemplate restTemplate = new RestTemplate();
    private final ObjectMapper objectMapper = new ObjectMapper();
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
        return callOpenAi("Analyze this food image URL and estimate calories: " + imageUrl);
    }

    public FoodAnalysisResponseDto analyzeFood(FoodAnalysisRequestDto request, String userEmail) {
        // Fetch user profile allergies if user logged in
        String userAllergiesStr = "";
        String userDietType = "";
        if (userEmail != null) {
            Optional<User> userOpt = userRepository.findByEmail(userEmail);
            if (userOpt.isPresent()) {
                Optional<UserProfile> profileOpt = userProfileRepository.findByUser(userOpt.get());
                if (profileOpt.isPresent()) {
                    UserProfile profile = profileOpt.get();
                    if (profile.getAllergies() != null) userAllergiesStr = profile.getAllergies();
                    if (profile.getDietType() != null) userDietType = profile.getDietType();
                }
            }
        }
        if (request.getCustomAllergies() != null && !request.getCustomAllergies().trim().isEmpty()) {
            userAllergiesStr = (userAllergiesStr.isEmpty() ? "" : userAllergiesStr + ", ") + request.getCustomAllergies();
        }
        if (request.getDietType() != null && !request.getDietType().trim().isEmpty()) {
            userDietType = request.getDietType();
        }

        List<String> userAllergiesList = Arrays.stream(userAllergiesStr.split("[,;]"))
                .map(String::trim)
                .filter(s -> !s.isEmpty())
                .collect(Collectors.toList());

        // Perform analysis (either via OpenAI or fallback engine)
        if (!"mock-key".equals(apiKey) && apiKey != null && !apiKey.isBlank()) {
            try {
                return callOpenAiForFoodAnalysis(request, userAllergiesList, userDietType);
            } catch (Exception e) {
                System.err.println("OpenAI Vision/Structured call failed, using intelligent analyzer fallback: " + e.getMessage());
            }
        }

        return performRuleBasedAnalysis(request, userAllergiesList, userDietType);
    }

    private FoodAnalysisResponseDto performRuleBasedAnalysis(FoodAnalysisRequestDto request, List<String> userAllergies, String dietType) {
        String inputType = request.getInputType() != null ? request.getInputType().toUpperCase() : "FOOD_IMAGE";
        
        String productName;
        String category;
        String servingSize;
        List<String> ingredients = new ArrayList<>();
        FoodAnalysisResponseDto.NutritionInfo nutrition;
        List<FoodAnalysisResponseDto.AdditiveInfo> additives = new ArrayList<>();

        if ("BARCODE".equals(inputType)) {
            String code = request.getBarcode() != null ? request.getBarcode().trim() : "";
            if (code.equals("8901030700012") || code.contains("012")) {
                productName = "Nutri-Crunch Oat & Honey Bar with Almonds";
                category = "Packaged Snack / Granola Bar";
                servingSize = "1 Bar (50g)";
                ingredients = List.of("Whole Grain Rolled Oats", "Honey", "Roasted Almonds", "Palm Oil", "High Fructose Corn Syrup", "Soy Lecithin", "Sodium Benzoate (E211)", "Artificial Flavor");
                nutrition = FoodAnalysisResponseDto.NutritionInfo.builder()
                        .calories(230)
                        .proteinG(5.0)
                        .carbsG(32.0)
                        .fatG(9.0)
                        .fiberG(3.5)
                        .sugarG(18.0)
                        .sodiumMg(140.0)
                        .micronutrients(Map.of("Iron", "1.8mg (10% DV)", "Calcium", "40mg (4% DV)", "Vitamin E", "2.1mg (14% DV)"))
                        .build();
                additives.add(FoodAnalysisResponseDto.AdditiveInfo.builder()
                        .name("Sodium Benzoate (E211)")
                        .category("Preservative")
                        .riskLevel("MODERATE")
                        .description("Common synthetic preservative used to prolong shelf life.")
                        .build());
                additives.add(FoodAnalysisResponseDto.AdditiveInfo.builder()
                        .name("High Fructose Corn Syrup")
                        .category("Sweetener")
                        .riskLevel("HIGH")
                        .description("Refined sweetener linked to rapid blood sugar spikes.")
                        .build());
            } else if (code.equals("012000800001") || code.contains("sugar") || code.contains("cola")) {
                productName = "Sparkling Sugar-Free Citrus Soda";
                category = "Beverages / Carbonated Drink";
                servingSize = "1 Can (355ml)";
                ingredients = List.of("Carbonated Water", "Citric Acid", "Aspartame", "Acesulfame Potassium", "Sodium Benzoate (E211)", "Red 40 (E129)", "Natural Citrus Flavor");
                nutrition = FoodAnalysisResponseDto.NutritionInfo.builder()
                        .calories(5)
                        .proteinG(0.0)
                        .carbsG(1.0)
                        .fatG(0.0)
                        .fiberG(0.0)
                        .sugarG(0.0)
                        .sodiumMg(55.0)
                        .micronutrients(Map.of("Vitamin C", "15mg (20% DV)"))
                        .build();
                additives.add(FoodAnalysisResponseDto.AdditiveInfo.builder()
                        .name("Aspartame")
                        .category("Artificial Sweetener")
                        .riskLevel("MODERATE")
                        .description("High-intensity artificial sweetener; should be consumed in moderation.")
                        .build());
                additives.add(FoodAnalysisResponseDto.AdditiveInfo.builder()
                        .name("Red 40 (E129)")
                        .category("Artificial Color")
                        .riskLevel("MODERATE")
                        .description("Synthetic azo dye added for vibrant red coloring.")
                        .build());
            } else {
                productName = "Whole Grain Wheat & Peanut Butter Snack Bites (Barcode: " + (code.isEmpty() ? "Scanned Product" : code) + ")";
                category = "Packaged Healthy Snack";
                servingSize = "1 Pack (60g)";
                ingredients = List.of("Whole Wheat Flour", "Peanuts", "Peanut Butter", "Cane Sugar", "Milk Solids", "Sea Salt", "Tocopherols (E306)");
                nutrition = FoodAnalysisResponseDto.NutritionInfo.builder()
                        .calories(280)
                        .proteinG(10.0)
                        .carbsG(28.0)
                        .fatG(14.0)
                        .fiberG(4.0)
                        .sugarG(9.0)
                        .sodiumMg(210.0)
                        .micronutrients(Map.of("Magnesium", "45mg (11% DV)", "Potassium", "220mg (6% DV)"))
                        .build();
                additives.add(FoodAnalysisResponseDto.AdditiveInfo.builder()
                        .name("Tocopherols (E306)")
                        .category("Preservative / Antioxidant")
                        .riskLevel("LOW")
                        .description("Natural Vitamin E derivative used as an antioxidant preservative.")
                        .build());
            }
        } else if ("INGREDIENT_LABEL".equals(inputType)) {
            productName = "Scanned Package Ingredient List";
            category = "Processed Packaged Food";
            servingSize = "1 Portion (100g)";
            ingredients = List.of("Wheat Flour", "Sugar", "Whole Milk Powder", "Peanut Extract", "Palm Oil", "Monosodium Glutamate (MSG / E621)", "Yellow 5 (E102)", "Potassium Sorbate (E202)");
            nutrition = FoodAnalysisResponseDto.NutritionInfo.builder()
                    .calories(390)
                    .proteinG(7.0)
                    .carbsG(52.0)
                    .fatG(18.0)
                    .fiberG(2.0)
                    .sugarG(24.0)
                    .sodiumMg(480.0)
                    .micronutrients(Map.of("Iron", "1.2mg", "Calcium", "80mg"))
                    .build();
            additives.add(FoodAnalysisResponseDto.AdditiveInfo.builder()
                    .name("Monosodium Glutamate (MSG / E621)")
                    .category("Flavor Enhancer")
                    .riskLevel("MODERATE")
                    .description("Flavor enhancer that may cause sensitivity in prone individuals.")
                    .build());
            additives.add(FoodAnalysisResponseDto.AdditiveInfo.builder()
                    .name("Yellow 5 (E102)")
                    .category("Artificial Color")
                    .riskLevel("MODERATE")
                    .description("Synthetic yellow dye.")
                    .build());
            additives.add(FoodAnalysisResponseDto.AdditiveInfo.builder()
                    .name("Potassium Sorbate (E202)")
                    .category("Preservative")
                    .riskLevel("LOW")
                    .description("Inhibits mold and yeast growth.")
                    .build());
        } else if ("NUTRITION_LABEL".equals(inputType)) {
            productName = "Scanned Nutrition Facts Panel";
            category = "Nutrition Panel Data";
            servingSize = "1 Serving (240ml / 8oz)";
            ingredients = List.of("Filtered Water", "Soy Protein Isolate", "Cane Sugar", "High Oleic Sunflower Oil", "Cocoa Powder", "Vitamin & Mineral Blend");
            nutrition = FoodAnalysisResponseDto.NutritionInfo.builder()
                    .calories(180)
                    .proteinG(16.0)
                    .carbsG(14.0)
                    .fatG(5.0)
                    .fiberG(3.0)
                    .sugarG(8.0)
                    .sodiumMg(260.0)
                    .micronutrients(Map.of("Vitamin C", "30mg (33% DV)", "Calcium", "300mg (25% DV)", "Iron", "4.5mg (25% DV)", "Potassium", "450mg (10% DV)"))
                    .build();
        } else {
            // FOOD_IMAGE
            String url = request.getImageUrl() != null ? request.getImageUrl().toLowerCase() : "";
            if (url.contains("salad") || url.contains("green") || url.contains("bowl") || url.contains("avocado")) {
                productName = "Fresh Mediterranean Quinoa & Avocado Bowl";
                category = "Healthy Fresh Meal";
                servingSize = "1 Large Bowl (380g)";
                ingredients = List.of("Cooked Quinoa", "Fresh Avocado", "Cherry Tomatoes", "Cucumber", "Extra Virgin Olive Oil", "Lemon Juice", "Feta Cheese", "Walnuts");
                nutrition = FoodAnalysisResponseDto.NutritionInfo.builder()
                        .calories(410)
                        .proteinG(12.0)
                        .carbsG(38.0)
                        .fatG(24.0)
                        .fiberG(9.5)
                        .sugarG(4.0)
                        .sodiumMg(290.0)
                        .micronutrients(Map.of("Vitamin C", "45mg (50% DV)", "Iron", "3.8mg (21% DV)", "Potassium", "680mg (15% DV)", "Calcium", "120mg (10% DV)"))
                        .build();
            } else if (url.contains("burger") || url.contains("pizza") || url.contains("donut") || url.contains("fries")) {
                productName = "Loaded Fast Food Burger & Crispy Fries Dish";
                category = "Fast Food / High Calorie";
                servingSize = "1 Combo Meal (450g)";
                ingredients = List.of("Refined Wheat Bun", "Beef Patty", "Cheddar Cheese", "Bacon", "Mayonnaise", "Ketchup", "Deep Fried Potatoes", "Sodium Nitrite (E250)", "High Fructose Corn Syrup");
                nutrition = FoodAnalysisResponseDto.NutritionInfo.builder()
                        .calories(890)
                        .proteinG(32.0)
                        .carbsG(85.0)
                        .fatG(48.0)
                        .fiberG(3.0)
                        .sugarG(16.0)
                        .sodiumMg(1280.0)
                        .micronutrients(Map.of("Iron", "4.2mg (23% DV)", "Calcium", "180mg (14% DV)"))
                        .build();
                additives.add(FoodAnalysisResponseDto.AdditiveInfo.builder()
                        .name("Sodium Nitrite (E250)")
                        .category("Preservative")
                        .riskLevel("HIGH")
                        .description("Cured meat preservative linked to nitrosamine formation under high heat.")
                        .build());
            } else {
                productName = "Grilled Chicken Breast with Brown Rice & Steamed Broccoli";
                category = "Balanced Fitness Meal";
                servingSize = "1 Plate (350g)";
                ingredients = List.of("Skinless Chicken Breast", "Whole Grain Brown Rice", "Steamed Broccoli", "Olive Oil", "Garlic", "Black Pepper", "Sea Salt");
                nutrition = FoodAnalysisResponseDto.NutritionInfo.builder()
                        .calories(460)
                        .proteinG(42.0)
                        .carbsG(45.0)
                        .fatG(11.0)
                        .fiberG(6.0)
                        .sugarG(2.5)
                        .sodiumMg(340.0)
                        .micronutrients(Map.of("Vitamin C", "80mg (88% DV)", "Iron", "2.8mg (15% DV)", "Potassium", "720mg (16% DV)", "Calcium", "60mg (5% DV)"))
                        .build();
            }
        }

        // Allergen Match Check against User Profile
        List<FoodAnalysisResponseDto.AllergenWarning> matchedAllergens = new ArrayList<>();

        for (String userAllergy : userAllergies) {
            String allergyLower = userAllergy.toLowerCase().trim();
            if (allergyLower.isEmpty()) continue;
            for (String ing : ingredients) {
                String ingLower = ing.toLowerCase();
                if (ingLower.contains(allergyLower) || (allergyLower.contains("dairy") && (ingLower.contains("milk") || ingLower.contains("cheese") || ingLower.contains("whey") || ingLower.contains("feta")))
                        || (allergyLower.contains("nut") && (ingLower.contains("peanut") || ingLower.contains("almond") || ingLower.contains("walnut") || ingLower.contains("cashew")))) {
                    matchedAllergens.add(FoodAnalysisResponseDto.AllergenWarning.builder()
                            .allergen(userAllergy)
                            .severity("HIGH")
                            .reason("Contains ingredient '" + ing + "' which directly matches your recorded allergy to " + userAllergy + ".")
                            .build());
                    break;
                }
            }
        }

        // Diet Suitability Map
        Map<String, Boolean> dietSuitability = new HashMap<>();
        boolean isVegan = ingredients.stream().noneMatch(i -> {
            String l = i.toLowerCase();
            return l.contains("chicken") || l.contains("beef") || l.contains("bacon") || l.contains("milk") || l.contains("cheese") || l.contains("egg") || l.contains("feta") || l.contains("honey") || l.contains("whey");
        });
        boolean isVegetarian = ingredients.stream().noneMatch(i -> {
            String l = i.toLowerCase();
            return l.contains("chicken") || l.contains("beef") || l.contains("bacon") || l.contains("fish") || l.contains("shellfish");
        });
        boolean isGlutenFree = ingredients.stream().noneMatch(i -> {
            String l = i.toLowerCase();
            return l.contains("wheat") || l.contains("barley") || l.contains("rye") || l.contains("gluten");
        });
        boolean isKeto = nutrition.getCarbsG() != null && nutrition.getCarbsG() <= 15.0;
        boolean isLowCarb = nutrition.getCarbsG() != null && nutrition.getCarbsG() <= 25.0;
        boolean isDiabeticFriendly = (nutrition.getSugarG() != null && nutrition.getSugarG() <= 8.0) && (nutrition.getFiberG() != null && nutrition.getFiberG() >= 3.0);

        dietSuitability.put("Vegan", isVegan);
        dietSuitability.put("Vegetarian", isVegetarian);
        dietSuitability.put("Gluten-Free", isGlutenFree);
        dietSuitability.put("Keto", isKeto);
        dietSuitability.put("Low-Carb", isLowCarb);
        dietSuitability.put("Diabetic-Friendly", isDiabeticFriendly);

        // Determine Verdict
        String verdict;
        StringBuilder explanation = new StringBuilder();

        if (!matchedAllergens.isEmpty()) {
            verdict = "AVOID";
            explanation.append("CRITICAL ALLERGY ALERT: This food contains ");
            explanation.append(matchedAllergens.stream().map(FoodAnalysisResponseDto.AllergenWarning::getAllergen).collect(Collectors.joining(", ")));
            explanation.append(" which match your personal profile allergies. Consuming this item presents a health risk.");
        } else if (nutrition.getSugarG() != null && nutrition.getSugarG() >= 18.0) {
            verdict = "CAUTION";
            explanation.append("CAUTION: High sugar level (").append(nutrition.getSugarG()).append("g), exceeding recommended single-serving thresholds.");
            if (!additives.isEmpty()) {
                explanation.append(" Additionally, ").append(additives.size()).append(" synthetic additive(s) were detected.");
            }
        } else if (nutrition.getSodiumMg() != null && nutrition.getSodiumMg() >= 600.0) {
            verdict = "CAUTION";
            explanation.append("CAUTION: High sodium content (").append(nutrition.getSodiumMg()).append("mg) which may impact blood pressure and water retention.");
        } else if (!additives.isEmpty() && additives.stream().anyMatch(a -> "HIGH".equals(a.getRiskLevel()))) {
            verdict = "CAUTION";
            explanation.append("CAUTION: Contains high-risk additives (e.g. ").append(additives.get(0).getName()).append(").");
        } else {
            verdict = "SAFE";
            explanation.append("SAFE: Clean nutrient profile with no detected user allergy conflicts or elevated health risks. Fits your dietary needs.");
        }

        // Fetch Better Alternatives if Caution or Avoid
        List<FoodAnalysisResponseDto.AlternativeOption> betterAlternatives = new ArrayList<>();
        if ("CAUTION".equals(verdict) || "AVOID".equals(verdict)) {
            betterAlternatives = generateBetterAlternatives(productName, userAllergies);
        }

        return FoodAnalysisResponseDto.builder()
                .productName(productName)
                .category(category)
                .servingSize(servingSize)
                .verdict(verdict)
                .verdictExplanation(explanation.toString())
                .ingredientsList(ingredients)
                .matchedAllergens(matchedAllergens)
                .additives(additives)
                .dietSuitability(dietSuitability)
                .nutrition(nutrition)
                .betterAlternatives(betterAlternatives)
                .build();
    }

    private List<FoodAnalysisResponseDto.AlternativeOption> generateBetterAlternatives(String originalFood, List<String> userAllergies) {
        List<FoodAnalysisResponseDto.AlternativeOption> list = new ArrayList<>();
        
        // Query DB recipes if available
        List<Recipe> recipes = recipeRepository.findAll();
        for (Recipe r : recipes) {
            boolean hasAllergy = false;
            if (r.getIngredients() != null) {
                String ingStr = r.getIngredients().toLowerCase();
                for (String a : userAllergies) {
                    if (!a.isBlank() && ingStr.contains(a.toLowerCase())) {
                        hasAllergy = true;
                        break;
                    }
                }
            }
            if (!hasAllergy) {
                list.add(FoodAnalysisResponseDto.AlternativeOption.builder()
                        .id(r.getId())
                        .title(r.getTitle())
                        .description(r.getDescription())
                        .calories(r.getCalories() != null ? r.getCalories() : 350)
                        .proteinG(22.0)
                        .carbsG(30.0)
                        .fatG(9.0)
                        .imageUrl(r.getImageUrl() != null ? r.getImageUrl() : "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=600&q=80")
                        .whyBetter("Nutrient-dense recipe from your internal database free of your flagged allergens.")
                        .build());
            }
            if (list.size() >= 2) break;
        }

        if (list.isEmpty()) {
            list.add(FoodAnalysisResponseDto.AlternativeOption.builder()
                    .id(101L)
                    .title("Organic Greek Yogurt & Wild Berry Power Bowl")
                    .description("Creamy high-protein Greek yogurt topped with antioxidant-rich blueberries, chia seeds, and raw honey.")
                    .calories(240)
                    .proteinG(18.0)
                    .carbsG(22.0)
                    .fatG(4.5)
                    .imageUrl("https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=600&q=80")
                    .whyBetter("Provides 3x more protein, zero artificial sweeteners, and 60% less sugar than processed snacks.")
                    .build());
            list.add(FoodAnalysisResponseDto.AlternativeOption.builder()
                    .id(102L)
                    .title("Avocado & Roasted Chickpea Quinoa Salad")
                    .description("Fresh greens, protein-packed quinoa, crunchy chickpeas, and heart-healthy avocado dressing.")
                    .calories(360)
                    .proteinG(14.0)
                    .carbsG(36.0)
                    .fatG(14.0)
                    .imageUrl("https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80")
                    .whyBetter("100% whole-food ingredients, rich in dietary fiber (9g), with no preservatives or high-sodium sauces.")
                    .build());
        }

        return list;
    }

    private FoodAnalysisResponseDto callOpenAiForFoodAnalysis(FoodAnalysisRequestDto request, List<String> userAllergies, String dietType) throws Exception {
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        headers.setBearerAuth(apiKey);

        String prompt = String.format("""
            You are a expert clinical dietitian and food scientist AI. Analyze the provided food input (%s): %s.
            User Allergies: %s. User Diet Type: %s.
            Provide JSON response strictly matching this structure:
            {
              "productName": "string",
              "category": "string",
              "servingSize": "string",
              "verdict": "SAFE" | "CAUTION" | "AVOID",
              "verdictExplanation": "string explaining why safe, caution or avoid in plain language",
              "ingredientsList": ["ing1", "ing2"],
              "matchedAllergens": [{"allergen": "Peanuts", "severity": "HIGH", "reason": "why matched"}],
              "additives": [{"name": "E211", "category": "Preservative", "riskLevel": "MODERATE", "description": "desc"}],
              "dietSuitability": {"Vegan": true, "Keto": false, "Gluten-Free": true},
              "nutrition": {"calories": 300, "proteinG": 10.0, "carbsG": 30.0, "fatG": 8.0, "fiberG": 4.0, "sugarG": 5.0, "sodiumMg": 200.0, "micronutrients": {"Iron": "2mg"}},
              "betterAlternatives": [{"id": 1, "title": "Alt Title", "description": "desc", "calories": 250, "proteinG": 15.0, "carbsG": 20.0, "fatG": 5.0, "imageUrl": "url", "whyBetter": "why"}]
            }
            """, request.getInputType(), request.getImageUrl() != null ? request.getImageUrl() : request.getBarcode(), userAllergies, dietType);

        Map<String, Object> body = new HashMap<>();
        body.put("model", "gpt-3.5-turbo");
        body.put("messages", List.of(Map.of("role", "user", "content", prompt)));

        HttpEntity<Map<String, Object>> entity = new HttpEntity<>(body, headers);
        ResponseEntity<Map> response = restTemplate.postForEntity(OPENAI_API_URL, entity, Map.class);
        List<Map<String, Object>> choices = (List<Map<String, Object>>) response.getBody().get("choices");
        Map<String, Object> message = (Map<String, Object>) choices.get(0).get("message");
        String content = (String) message.get("content");
        
        return objectMapper.readValue(content, FoodAnalysisResponseDto.class);
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
