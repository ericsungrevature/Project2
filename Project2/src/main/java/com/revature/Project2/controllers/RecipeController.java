package com.revature.Project2.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.revature.Project2.entities.Recipe;
import com.revature.Project2.services.RecipeService;

@RestController
public class RecipeController {
	@Autowired
	private RecipeService service;

	@PostMapping("/recipes")
	public Recipe saveRecipe(@RequestBody Recipe recipe) {
		System.out.println("save recipe");
		return service.insertRecipe(recipe);
	}
	@GetMapping("/recipes")
	public List<Recipe> getRecipes() {
		System.out.println("get recipes");
		return service.getAllRecipes();
	}
	@GetMapping("/recipes/{id}")
	public Recipe getRecipeById(@PathVariable("id") long id) {
		System.out.println("get recipe");
		return service.getRecipeById(id);
	}
}
