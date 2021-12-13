package com.revature.Project2.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.revature.Project2.entities.User;
import com.revature.Project2.services.UserService;

@RestController
public class UserController {
	@Autowired
	private UserService service;

	@PostMapping("/users")
	public User saveUser(@RequestBody User user) {
		System.out.println("save user");
		return service.insertUser(user);
	}
	@GetMapping("/users")
	public List<User> getUsers() {
		System.out.println("get users");
		return service.getAllUsers();
	}
	@GetMapping("/users/{username}")
	public User getUserByUsername(@PathVariable("username") String username) {
		System.out.println("get user");
		return service.getUserByUsername(username);
	}
	@PostMapping("/users/{username}")
	public User updateUser(@PathVariable("username") String username, @RequestBody User user) {
		System.out.println("update user");
		return service.updateUser(username, user);
	}
}
