import { Component, OnInit } from '@angular/core';
import { Ticket } from '../../ticket';
import { SharedService } from '../../shared.service';
import { MainServiceService } from '../../main-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ticket-req',
  templateUrl: './ticket-req.component.html',
  styleUrls: ['./ticket-req.component.css']
})
export class TicketReqComponent implements OnInit {


  constructor(public ss: SharedService, private router:Router) { }

  reqTypes:String[]=["Travel Tickets", "Hotel Stay", "Visa", "Work Permit"];
  priorities:String[]=["Normal", "Urgent", "Immediate"];
  travelCities:String[]=["a","abc"];
  locCities:String[]=["bca","b"];

  rez="hello";
  reqType:String;
  priority:"select";
  travelCity:"select";
  locCity:"select";
  
  state:"select";
  country:"select";
  ticket :Ticket=this.ss.ticketinfo;

  returnDate:string

  today=new Date();


  // if((this.ss.userinfo)!=null){
  //   this.user =this.ss.userinfo;  
  // }
  submitted=false;


  ngOnInit(): void {
  }

  returnDate2(){// this.today = new Date().toISOString().split('T')[0]+1;
  this.returnDate = "";
  //get datetime now
  var today = new Date();
  //split
  var dd = today.getDate();
  var mm = today.getMonth() + 1; //because January is 0! 
  var yyyy = today.getFullYear();
  //Interpolation date
  this.returnDate += yyyy;
  if (mm < 10) {
      this.returnDate += `-0${mm}`;
  } else {
      this.returnDate += `-${mm}`;
  }
  
  if (dd < 10) {
      this.returnDate += `-0${dd}`;
  } else {
      this.returnDate += `-${dd}`;
  }
  return this.returnDate
}

  newUser(): void {
    // this.submitted = false;
    this.ticket= new Ticket();
    }
    
    save() {
    // this.billService.newUser(this.user)
    // .subscribe(data => console.log(data), error => console.log(error));
    // this.user= new User();
    // this.gotoList();
    this.ss.ticketinfo=this.ticket;
      this.router.navigate(['/ticket-conf']);
    }
    
    onSubmit() {
    // this.submitted = true;
      /*This will create random password*/
      // var randomstring = Math.random().toString(36).slice(-8);
      // this.user.password=randomstring;
      this.ticket.subDate=this.returnDate2();
      this.ticket.status="submitted";
      this.save();
    }
    
    // gotoList() {
      // this.regConf.user2=this.user;
      // this.router.navigate(['/reg-conf']);
      // this.router.navigate(['']);


    // }

}
