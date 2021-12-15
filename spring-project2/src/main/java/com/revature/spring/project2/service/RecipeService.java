package com.revature.spring.project2.service;

import java.util.List;
import java.util.Optional;

import com.revature.spring.project2.entity.Recipe;
import com.revature.spring.project2.repository.RecipeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class RecipeService {
    @Autowired
    private RecipeRepository repository;

    public Recipe insertRecipe(Recipe recipe) {
        return repository.save(recipe);
    }

    public List<Recipe> getAllRecipes() {
        return repository.findAll();
    }

    public Optional<Recipe> getRecipeById(long id) {
        return repository.findById(id);
    }
}