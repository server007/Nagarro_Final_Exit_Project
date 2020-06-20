import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../shared.service';
import { Ticket } from '../../ticket';
import { Router, ActivatedRoute } from '@angular/router';
import { MainServiceService } from '../../main-service.service';

@Component({
  selector: 'app-ticket-stat',
  templateUrl: './ticket-stat.component.html',
  styleUrls: ['./ticket-stat.component.css']
})
export class TicketStatComponent implements OnInit {

  ticket:Ticket;
  tid 

  constructor(private route: ActivatedRoute,private ss: SharedService,private router:Router, private mainService:MainServiceService) { }
  ngOnInit(): void {
    // window.open("./ticket-stat.component.tml")
    // this.tid = this.route.snapshot.params['ticket.tId'];
    this.tid=sessionStorage.getItem("findid")
    console.log(this.tid)
    this.reloadData();
  }

  reloadData(){
    console.log(this.tid)
    this.mainService.getTicket(this.tid)
    .subscribe(data => {
      console.log(data)
      this.ticket =data;
      }, error => console.log(error));
    this.details();
  }
details(){
console.log(this.ticket);
}
  
  // ticket:Ticket=this.ss.ticketinfo;


}
