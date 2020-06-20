package com.nagarro.travelportal.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import com.nagarro.travelportal.model.UserDetails;

public interface LoginUserDetailsRepository extends CrudRepository<UserDetails, Integer> {
	public UserDetails findByEmail(String email);
	
	@Query(value="Select * from user_details where uId =?1", nativeQuery=true)
	public UserDetails findById(int uId);
	
}
