CREATE TABLE nutrition_rules (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    rule_key VARCHAR(100) NOT NULL UNIQUE,
    rule_value DOUBLE PRECISION NOT NULL,
    description VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

ALTER TABLE user_profiles ADD COLUMN daily_water_target_liters DOUBLE PRECISION;
ALTER TABLE user_profiles ADD COLUMN daily_fiber_target_g INT;
ALTER TABLE user_profiles ADD COLUMN iron_target_mg DOUBLE PRECISION;
ALTER TABLE user_profiles ADD COLUMN calcium_target_mg DOUBLE PRECISION;
ALTER TABLE user_profiles ADD COLUMN vit_d_target_mcg DOUBLE PRECISION;
ALTER TABLE user_profiles ADD COLUMN vit_b12_target_mcg DOUBLE PRECISION;
ALTER TABLE user_profiles ADD COLUMN vit_c_target_mg DOUBLE PRECISION;
ALTER TABLE user_profiles ADD COLUMN magnesium_target_mg DOUBLE PRECISION;
ALTER TABLE user_profiles ADD COLUMN potassium_target_mg DOUBLE PRECISION;
ALTER TABLE user_profiles ADD COLUMN zinc_target_mg DOUBLE PRECISION;

-- Seed default rules
INSERT INTO nutrition_rules (rule_key, rule_value, description) VALUES ('multiplier_lightly_active', 1.375, 'BMR multiplier for lightly active users');
INSERT INTO nutrition_rules (rule_key, rule_value, description) VALUES ('multiplier_moderately_active', 1.55, 'BMR multiplier for moderately active users');
INSERT INTO nutrition_rules (rule_key, rule_value, description) VALUES ('multiplier_very_active', 1.725, 'BMR multiplier for very active users');
INSERT INTO nutrition_rules (rule_key, rule_value, description) VALUES ('multiplier_highly_active', 1.9, 'BMR multiplier for highly active athletes');
INSERT INTO nutrition_rules (rule_key, rule_value, description) VALUES ('multiplier_sedentary', 1.2, 'BMR multiplier for sedentary users');

INSERT INTO nutrition_rules (rule_key, rule_value, description) VALUES ('goal_weight_loss_adj', -500.0, 'Calorie adjustment for weight loss');
INSERT INTO nutrition_rules (rule_key, rule_value, description) VALUES ('goal_muscle_gain_adj', 500.0, 'Calorie adjustment for muscle gain');
INSERT INTO nutrition_rules (rule_key, rule_value, description) VALUES ('goal_strength_adj', 300.0, 'Calorie adjustment for strength performance');
INSERT INTO nutrition_rules (rule_key, rule_value, description) VALUES ('goal_maintenance_adj', 0.0, 'Calorie adjustment for maintenance');

INSERT INTO nutrition_rules (rule_key, rule_value, description) VALUES ('macro_protein_pct_default', 0.30, 'Default protein percentage (30%)');
INSERT INTO nutrition_rules (rule_key, rule_value, description) VALUES ('macro_carbs_pct_default', 0.40, 'Default carbs percentage (40%)');
INSERT INTO nutrition_rules (rule_key, rule_value, description) VALUES ('macro_fats_pct_default', 0.30, 'Default fats percentage (30%)');

INSERT INTO nutrition_rules (rule_key, rule_value, description) VALUES ('macro_protein_pct_muscle', 0.35, 'Protein percentage for muscle gain (35%)');
INSERT INTO nutrition_rules (rule_key, rule_value, description) VALUES ('macro_carbs_pct_muscle', 0.45, 'Carbs percentage for muscle gain (45%)');
INSERT INTO nutrition_rules (rule_key, rule_value, description) VALUES ('macro_fats_pct_muscle', 0.20, 'Fats percentage for muscle gain (20%)');

INSERT INTO nutrition_rules (rule_key, rule_value, description) VALUES ('water_multiplier_liters_per_kg', 0.033, 'Liters of water per kg of body weight');
INSERT INTO nutrition_rules (rule_key, rule_value, description) VALUES ('fiber_grams_per_1000_kcal', 14.0, 'Grams of fiber per 1000 calories');
