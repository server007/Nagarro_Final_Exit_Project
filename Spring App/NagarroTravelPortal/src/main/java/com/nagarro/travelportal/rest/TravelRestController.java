package com.nagarro.travelportal.rest;

import java.util.*;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;

import javax.servlet.http.HttpServletRequest;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import com.nagarro.travelportal.service.*;
import com.nagarro.travelportal.exception.*;
import com.nagarro.travelportal.model.*;
import com.nagarro.travelportal.repository.*;

@RestController  
@CrossOrigin(origins="http://localhost:4200")  
@RequestMapping(value="/api") 
public class TravelRestController {
	@Autowired
    private LoginUserRepository urepo;
	
	@Autowired
    private LoginUserDetailsRepository udrepo;
	
	@Autowired
	private TicketDetailsRepository tdrepo;
	
	@Autowired
	private TicketService tService;
	
	@Autowired
    private LoginAdminRepository arepo;
	
	@Autowired
    private LoginUserService lService;

	@Autowired
    private LoginAdminService aService;
	
	 @Autowired
	    private JavaMailSender sender;
	 
	 @RequestMapping("/sendMail")
	    public String sendMail() {
	        MimeMessage message = sender.createMimeMessage();
	        MimeMessageHelper helper = new MimeMessageHelper(message);

	        try {
	            helper.setTo("demo@gmail.com");
	            helper.setText("Greetings :)");
	            helper.setSubject("Mail From Spring Boot");
	        } catch (MessagingException e) {
	            e.printStackTrace();
	            return "Error while sending mail ..";
	        }
	        sender.send(message);
	        return "Mail Sent Success!";
	    }
	 
	/*
	 * Registration
	 */
	@PostMapping("/user")  
    public UserDetails saveUser(@Valid @RequestBody UserDetails userdetails) { 
		
		MimeMessage message = sender.createMimeMessage();
        MimeMessageHelper helper = new MimeMessageHelper(message);
        
        try {
            helper.setTo(userdetails.getEmail());
            helper.setText("Greetings from Travel Portal !\r\nBelow are the credentials to login into the Travel Portal. "
            		+"\r\n \r\n   Your username :  "+userdetails.getEmail()
            		+"\r\n   Your password :  "+userdetails.getPassword()
            		+"\r\n\r\n\r\nThank you,\\r\\nNagarro Travel Team.");
            helper.setSubject("You have signed up successfully");
        } catch (MessagingException e) {
            e.printStackTrace();
        }
        sender.send(message);
        
		return udrepo.save(userdetails) ;
    }  
	
	

	
	/*
	 * login user authentication
	 */
	@PostMapping("/loginUser")
	public int loginUser(@Valid @RequestBody UserDetails user) {
		String email=user.getEmail();
		String pass=user.getPassword();
		UserDetails u = lService.checkUser(email);
		if(u==null) {
			return 0;
		}
		else if(u.getPassword().equals(pass)) {
			return u.getuser_Id();
		}
		else {
			return 0;
		}
	}
	
	/*
	 * forgot password
	 */
	@PostMapping("/forgotPass")
	public Boolean forgotPassword(@Valid @RequestBody UserDetails userdetails) {
		String email=userdetails.getEmail();
		UserDetails u = lService.checkUser(email);
		if(u==null) {
			return false;
		}
		else {
			
			MimeMessage message = sender.createMimeMessage();
	        MimeMessageHelper helper = new MimeMessageHelper(message);
	        System.out.println(email+" "+u.getPassword());
	        try {
	            helper.setTo(email);
	            helper.setText("Greetings from Travel Portal !\r\nYou have requested your user name and password for the your access to the Nagarro Travel Portal: "
	            		+"\r\n\r\n     Username :  "+email
	            		+"\r\n     Password :  "+u.getPassword()
	            		+"\r\n\r\nPlease contact the Travel team if you have any questions."
	            		+"\r\n\r\nThank you,\r\nNagarro Travel Team.");
	            helper.setSubject("Nagarro Travel Portal Information");
	        } catch (MessagingException e) {
	            e.printStackTrace();
	        }
	        sender.send(message);
			return true;
		}
	}
	
	
	/*
	 * admin user authentication 
	 */
	@PostMapping("/adminLoginUser")
	public Boolean adminLoginUser(@Valid @RequestBody Admin admin) {
			String email=admin.getEmail();
			String pass=admin.getPassword();
			Admin a = aService.checkUser(email);
			if(a==null) {
				return false;
			}
			else if(a.getPassword().equals(pass)) {
				return true;
			}
			else {
				return false;
			}
		}

	/*
	 * Register a ticket
	 */
	@PostMapping("/ticket/{id}")  
    public TicketDetails saveTicket(@PathVariable(name="id") int uid,@Valid @RequestBody TicketDetails ticketdetails) 
	{ 
		UserDetails user=udrepo.findById(uid);
		ticketdetails.setUserdetails(user);
		return tService.save(ticketdetails);
}
	
	/*
	 * Update ticket
	 */
	@PostMapping("/updTicket")  
    public TicketDetails updTicket(@Valid @RequestBody TicketDetails ticketdetails) 
	{ 
		TicketDetails ticket=tdrepo.findById(ticketdetails.gettId());
		 ticket.settId(ticketdetails.gettId());
		 ticket.setReqType(ticketdetails.getReqType());
		 ticket.setPriority(ticketdetails.getPriority());
		 ticket.setTravelCity(ticketdetails.getTravelCity());
		 ticket.setLocationCity(ticketdetails.getLocationCity());
		 ticket.setTravelDate(ticketdetails.getTravelDate());
		 ticket.setTravelEndDate(ticketdetails.getTravelEndDate());
		 ticket.setSubDate(ticketdetails.getSubDate());
		 ticket.setStatus(ticketdetails.getStatus());
		 ticket.setPassport(ticketdetails.getPassport());
		 ticket.setProjectName(ticketdetails.getProjectName());
		 ticket.setExpenseBorne(ticketdetails.getExpenseBorne());
		 ticket.setTravelAppr(ticketdetails.getTravelAppr());
		 ticket.setExpectedDur(ticketdetails.getExpectedDur());
		 ticket.setTravelAmm(ticketdetails.getTravelAmm());
		 ticket.setAddDetails(ticketdetails.getAddDetails());
		 ticket.setComments(ticketdetails.getComments());
		 ticket.setFile(ticketdetails.getFile());
		 
		return tService.save(ticket);
	}
	
	
	@GetMapping("/allTickets")
	 public List<Ticket> getTicket() {
		 List<TicketDetails> ticketlist=(List<TicketDetails>)tdrepo.findAll();
		 List<Ticket> list=new ArrayList<Ticket>();    
		 
		 Iterator<TicketDetails> itr= ticketlist.iterator();
		 while(itr.hasNext())
		 {	
			 list.add(convertTicketDetailsToTicket(itr.next()));
		 }
		 return list;
	 }
	
	 @GetMapping("/findticket/{tid}")
	 public Ticket getTicket(@PathVariable(name="tid") int tid) {
		 TicketDetails ticketdetails=tdrepo.findById(tid);
		 Ticket ticket=new Ticket();
		 ticket=convertTicketDetailsToTicket(ticketdetails);
		 return ticket;
	 }
	
	
//	Get List of all tickets
 @GetMapping("/ticketList/{id}")  
    public List<Ticket> getAllTickets(@PathVariable(name="id") int uid) {  
	 
	 List<TicketDetails> ticketlist=(List<TicketDetails>)tdrepo.find(uid); 
	 
	 
     List<Ticket> list=new ArrayList<Ticket>();    
	 
	 Iterator<TicketDetails> itr= ticketlist.iterator();
	 while(itr.hasNext())
	 {	
		 list.add(convertTicketDetailsToTicket(itr.next()));
	 }
	 return list;
    }
	
	 
//	 convertTicketDetailsToTicket
	 public Ticket convertTicketDetailsToTicket(TicketDetails ticket)
	 {
		 Ticket ticketDetails=new Ticket();
		 ticketDetails.settId(ticket.gettId());
		 ticketDetails.setReqType(ticket.getReqType());
		 ticketDetails.setPriority(ticket.getPriority());
		 ticketDetails.setTravelCity(ticket.getTravelCity());
		 ticketDetails.setLocationCity(ticket.getLocationCity());
		 ticketDetails.setTravelDate(ticket.getTravelDate());
		 ticketDetails.setTravelEndDate(ticket.getTravelEndDate());
		 ticketDetails.setSubDate(ticket.getSubDate());
		 ticketDetails.setStatus(ticket.getStatus());
		 ticketDetails.setPassport(ticket.getPassport());
		 ticketDetails.setProjectName(ticket.getProjectName());
		 ticketDetails.setExpenseBorne(ticket.getExpenseBorne());
		 ticketDetails.setTravelAppr(ticket.getTravelAppr());
		 ticketDetails.setExpectedDur(ticket.getExpectedDur());
		 ticketDetails.setTravelAmm(ticket.getTravelAmm());
		 ticketDetails.setAddDetails(ticket.getAddDetails());
		 
		 return ticketDetails;
	 }
	
	
	 
}
