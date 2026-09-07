package com.nutrition.repository;

import com.nutrition.entity.NutritionistProfile;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface NutritionistProfileRepository extends JpaRepository<NutritionistProfile, Long> {
    Optional<NutritionistProfile> findByUserId(Long userId);
}
