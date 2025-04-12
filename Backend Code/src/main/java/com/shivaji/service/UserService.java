package com.shivaji.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.shivaji.entity.User;
import com.shivaji.repo.UserRepository;

@Service
public class UserService {
	
	@Autowired
	private UserRepository userRepository;
	
	public boolean login(String username, String password) {
		return userRepository.findByUsername(username)
				.map(user -> user.getPassword().equals(password))
					.orElse(false);
	}
	public User register(User user) {
		return userRepository.save(user);
	}
}
