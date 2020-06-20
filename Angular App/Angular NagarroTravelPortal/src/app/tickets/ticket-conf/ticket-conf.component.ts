import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../shared.service';
import { MainServiceService } from '../../main-service.service';
import { Router } from '@angular/router';
import { Ticket } from '../../ticket';

@Component({
  selector: 'app-ticket-conf',
  templateUrl: './ticket-conf.component.html',
  styleUrls: ['./ticket-conf.component.css']
})
export class TicketConfComponent implements OnInit {

  constructor(private ss: SharedService,private mainService :MainServiceService,private router:Router) { }

  ticket:Ticket=this.ss.ticketinfo;

  ngOnInit(): void {
  }

  save() {
    this.mainService.newTicket(this.ticket)
    .subscribe(data => console.log(data), error => console.log(error));
    this.ss.ticketinfo= new Ticket();
    this.gotoList();
    }
    
    onSubmit() {
    // this.submitted = true;
      /*This will create random password*/
      // var randomstring = Math.random().toString(36).slice(-8);
      // this.user2.password=randomstring;
      this.save();
    }
    
    gotoList() {
      // this.regConf.user2=this.user;
      // this.router.navigate(['/reg-conf']);
      this.router.navigate(['/home']);
      
    }

    printComponent(cmpName) {
      let printContents = document.getElementById(cmpName).innerHTML;
      let originalContents = document.body.innerHTML;
 
      document.body.innerHTML = printContents;
 
      window.print();
 
      document.body.innerHTML = originalContents;
 }

    editDoc(){
      this.router.navigate(['/ticket-req']);
    }

}
