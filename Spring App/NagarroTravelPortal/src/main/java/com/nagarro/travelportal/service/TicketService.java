package com.nagarro.travelportal.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.nagarro.travelportal.model.TicketDetails;
import com.nagarro.travelportal.model.User;
import com.nagarro.travelportal.model.UserDetails;
import com.nagarro.travelportal.repository.LoginUserDetailsRepository;
import com.nagarro.travelportal.repository.LoginUserRepository;
import com.nagarro.travelportal.repository.TicketDetailsRepository;

@Service
@Transactional
public class TicketService {
	
	@Autowired
	private TicketDetailsRepository repo;
	
	public TicketDetails save(TicketDetails ticket)
	{
		return repo.save(ticket);
	}
}
