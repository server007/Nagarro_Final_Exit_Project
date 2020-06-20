package com.nagarro.travelportal.model;


import java.io.File;
import java.sql.Date;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.OrderColumn;
import javax.persistence.Table;

import org.hibernate.annotations.ColumnDefault;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;
import org.springframework.jca.cci.connection.ConnectionFactoryUtils;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name="ticket_details")
public class TicketDetails {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="tid")
	private int tId;
	
	@Column(name="reqType")
	private String reqType;

	@Column(name="priority")
	private String priority;	
	
	@Column(name="travelCity")
	private String travelCity;
	
	@Column(name="locationCity")
	private String locationCity;
	
	@Column(name="travelDate")
	private Date travelDate;
	
	@Column(name="travelEndDate")
	private Date travelEndDate;
	
	@Column(name="subDate")
	private String subDate;
	
	@Column(name="status")
	private String status;

	@Column(name="passport")
	private String passport;

	@Column(name="projectName")
	private String projectName;

	@Column(name="expenseBorne")
	private String expenseBorne;

	@Column(name="travelAppr")
	private String travelAppr;
	
	@Column(name="expectedDur")
	private String expectedDur;

	@Column(name="travelAmm")
	private String travelAmm;
	
	@Column(name="addDetails")
	private String addDetails;
	
	@Column(name="comments")
	private String comments;
	
	@Column(name="file")
	private File file;
	
	@ManyToOne(cascade=CascadeType.ALL)
    @JoinColumn(name = "uid")
    private UserDetails user;
//  @OnDelete(action = OnDeleteAction.CASCADE)
	
	public int gettId() {
		return tId;
	}

	public void settId(int tId) {
		this.tId = tId;
	}

	public UserDetails getUserdetails() {
		return user;
	}

	public void setUserdetails(UserDetails userdetails) {
		this.user = userdetails;
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

	public UserDetails getUser() {
		return user;
	}

	public void setUser(UserDetails user) {
		this.user = user;
	}

	public TicketDetails() {
		super();
	}

	public int getuId() {
		return tId;
	}

	public void setuId(int tId) {
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
	
}