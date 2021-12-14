package com.revature.Project2.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revature.Project2.entities.Recipe;
import com.revature.Project2.repository.RecipeRepository;

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
