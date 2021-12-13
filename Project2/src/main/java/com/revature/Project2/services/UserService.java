package com.revature.Project2.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revature.Project2.entities.User;
import com.revature.Project2.repository.UserRepository;

@Service
public class UserService {

	@Autowired
	private UserRepository repository;

	public User getUserByUsername(String username) {
		return repository.getUserByUsername(username);
	}

	public List<User> getAllUsers() {
		return repository.findAll();
	}

	public User insertUser(User user) {
		return repository.save(user);
	}

	public User updateUser(String username, User user) {
		User update = repository.getUserByUsername(username);
		update.setCart(user.getCart());
		update.setTags(user.getTags());
		return repository.save(update);
	}

}
