import { Component, OnInit } from '@angular/core';
import { Ticket } from '../../ticket';
import { SharedService } from '../../shared.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MainServiceService } from '../../main-service.service';


@Component({
  selector: 'app-ticket-review',
  templateUrl: './ticket-review.component.html',
  styleUrls: ['./ticket-review.component.css']
})
export class TicketReviewComponent implements OnInit {

  ticket:Ticket;
  tid 
  currstatus:string="hello"

  constructor(private route: ActivatedRoute,private ss: SharedService,private router:Router, private mainService:MainServiceService) { }

  ngOnInit(): void {
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
this.currstatus=this.ticket.status
}
changeSt(){
  console.log(this.ticket.status);
  this.ticket.status="in Process"
  console.log(this.ticket.status);

}

onSubmit() {
  // this.submitted = true;
    /*This will create random password*/
    // var randomstring = Math.random().toString(36).slice(-8);
    // this.user.password=randomstring;
    // this.ticket.subDate=this.returnDate2();
    this.ticket.status="in Process";
    // this.ticket.file=
    this.save();
  }

  save(){
    this.mainService.updTicket(this.ticket)
    .subscribe(data => console.log(data), error => console.log(error));
    // this.ss.ticketinfo= new Ticket();
    // this.gotoList();
    // this.closeit();
  }

  closeit(){
    window.close();
  }

}

