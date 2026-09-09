package com.nutrition.repository;

import com.nutrition.entity.NutritionRule;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface NutritionRuleRepository extends JpaRepository<NutritionRule, Long> {
    Optional<NutritionRule> findByRuleKey(String ruleKey);
}
