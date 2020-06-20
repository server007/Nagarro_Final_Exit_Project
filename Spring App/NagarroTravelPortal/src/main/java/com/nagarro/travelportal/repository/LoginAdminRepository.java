package com.nagarro.travelportal.repository;

import org.springframework.data.repository.CrudRepository;

import com.nagarro.travelportal.model.Admin;
import com.nagarro.travelportal.model.UserDetails;

public interface LoginAdminRepository extends CrudRepository<Admin, Integer>{
	public Admin findByEmail(String email);
}
