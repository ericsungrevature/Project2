package com.revature.Project2.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.revature.Project2.entities.Recipe;

@Repository
public interface RecipeRepository extends JpaRepository<Recipe, Long> {

}
