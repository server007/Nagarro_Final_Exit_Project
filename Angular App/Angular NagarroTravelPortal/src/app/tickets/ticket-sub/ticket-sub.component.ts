import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { Router } from '@angular/router';
import { Ticket } from '../../ticket';
import { MainServiceService } from '../../main-service.service';
import {NgxPaginationModule} from 'ngx-pagination';


@Component({
  selector: 'app-ticket-sub',
  templateUrl: './ticket-sub.component.html',
  styleUrls: ['./ticket-sub.component.css']
})
export class TicketSubComponent implements OnInit {
  tickets
  tickets2
  // :Observable<Ticket[]>;
  p: number = 1;
    // collection: string[] = ['Apple', 'Orange', 'Banana'];  
  constructor(private mainService :MainServiceService,private router:Router) { }

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData(){
    // this.tickets =this.mainService.getTicketsList();
    this.mainService.getTicketsList().subscribe(data => {
      this.tickets=data;
      // console.log(this.collection2)
      return data;
  }, error => console.log(error));
  }

  openNewTab(tid) :void {
    console.log(sessionStorage.getItem("tid"))
    sessionStorage.setItem("findid",tid);
    console.log(sessionStorage.getItem("findid"))
    // this.router.navigate(['ticket-stat'])
    window.open('./ticket-review');
  }
}
