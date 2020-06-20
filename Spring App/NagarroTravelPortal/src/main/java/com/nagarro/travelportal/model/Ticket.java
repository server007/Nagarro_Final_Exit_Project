package com.nagarro.travelportal.model;

import java.io.File;
import java.sql.Date;

public class Ticket {

	private int tId;
	
	private String reqType;

	private String priority;	
	
	private String travelCity;
	
	private String locationCity;
	
	private Date travelDate;
	
	private Date travelEndDate;
	
	private String subDate;
	
	private String status;

	private String passport;

	private String projectName;

	private String expenseBorne;

	private String travelAppr;
	
	private String expectedDur;

	private String travelAmm;
	
	private String addDetails;
	
	private String comments;
	
	private File file;
	
	public String getComments() {
		return comments;
	}

	public void setComments(String comments) {
		this.comments = comments;
	}

	public File getFile() {
		return file;
	}

	public void setFile(File file) {
		this.file = file;
	}

	public int gettId() {
		return tId;
	}

	public void settId(int tId) {
		this.tId = tId;
	}

	public String getReqType() {
		return reqType;
	}

	public void setReqType(String reqType) {
		this.reqType = reqType;
	}

	public String getPriority() {
		return priority;
	}

	public void setPriority(String priority) {
		this.priority = priority;
	}

	public String getTravelCity() {
		return travelCity;
	}

	public void setTravelCity(String travelCity) {
		this.travelCity = travelCity;
	}

	public String getLocationCity() {
		return locationCity;
	}

	public void setLocationCity(String locationCity) {
		this.locationCity = locationCity;
	}

	public Date getTravelDate() {
		return travelDate;
	}

	public void setTravelDate(Date travelDate) {
		this.travelDate = travelDate;
	}

	public Date getTravelEndDate() {
		return travelEndDate;
	}

	public void setTravelEndDate(Date travelEndDate) {
		this.travelEndDate = travelEndDate;
	}

	public String getSubDate() {
		return subDate;
	}

	public void setSubDate(String subDate) {
		this.subDate = subDate;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public String getPassport() {
		return passport;
	}

	public void setPassport(String passport) {
		this.passport = passport;
	}

	public String getProjectName() {
		return projectName;
	}

	public void setProjectName(String projectName) {
		this.projectName = projectName;
	}

	public String getExpenseBorne() {
		return expenseBorne;
	}

	public void setExpenseBorne(String expenseBorne) {
		this.expenseBorne = expenseBorne;
	}

	public String getTravelAppr() {
		return travelAppr;
	}

	public void setTravelAppr(String travelAppr) {
		this.travelAppr = travelAppr;
	}

	public String getExpectedDur() {
		return expectedDur;
	}

	public void setExpectedDur(String expectedDur) {
		this.expectedDur = expectedDur;
	}

	public String getTravelAmm() {
		return travelAmm;
	}

	public void setTravelAmm(String travelAmm) {
		this.travelAmm = travelAmm;
	}

	public String getAddDetails() {
		return addDetails;
	}

	public void setAddDetails(String addDetails) {
		this.addDetails = addDetails;
	}

	
}
