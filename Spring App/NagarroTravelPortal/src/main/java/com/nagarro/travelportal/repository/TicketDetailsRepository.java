package com.nagarro.travelportal.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import com.nagarro.travelportal.model.TicketDetails;

public interface TicketDetailsRepository extends CrudRepository<TicketDetails, Integer>{
	@Query(value="Select * from ticket_details where uid =?1 ", nativeQuery=true)
	public List<TicketDetails> find(int uId);
	
	@Query(value="Select * from ticket_details where tid =?1 ", nativeQuery=true)
	public TicketDetails findById(int tId);
	
	@Query(value="Select * from ticket_details ", nativeQuery=true)
	public List<TicketDetails> findAll();

}