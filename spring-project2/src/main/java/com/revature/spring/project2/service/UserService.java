package com.revature.spring.project2.service;

import java.util.List;

import com.revature.spring.project2.entity.User;
import com.revature.spring.project2.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


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