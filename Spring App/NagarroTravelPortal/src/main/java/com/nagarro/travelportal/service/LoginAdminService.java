package com.nagarro.travelportal.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.nagarro.travelportal.model.Admin;
import com.nagarro.travelportal.model.User;
import com.nagarro.travelportal.model.UserDetails;
import com.nagarro.travelportal.repository.LoginAdminRepository;
import com.nagarro.travelportal.repository.LoginUserDetailsRepository;
import com.nagarro.travelportal.repository.LoginUserRepository;

@Service
@Transactional
public class LoginAdminService {

	@Autowired
	private LoginAdminRepository repo;
	
	public Admin checkUser(String email) {
		return repo.findByEmail(email);
	}
}
