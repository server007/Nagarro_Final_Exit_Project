package com.nagarro.travelportal.exception;

import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.http.*;
@ResponseStatus(value=HttpStatus.NOT_FOUND)
public class ResourceNotFound extends Exception {
	public ResourceNotFound(String msg) {
		super(msg);
		// TODO Auto-generated constructor stub
	}

	private static final long serialVersionUID=1L;
	
	
}
