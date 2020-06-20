package com.nagarro.travelportal.repository;

import org.springframework.data.repository.CrudRepository;

import com.nagarro.travelportal.model.User;

public interface LoginUserRepository  extends CrudRepository<User, Integer> {
	public User findByEmail(String email);
}
