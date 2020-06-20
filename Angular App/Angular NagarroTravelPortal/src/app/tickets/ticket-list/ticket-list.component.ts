import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { Router } from '@angular/router';
import { Ticket } from '../../ticket';
import { MainServiceService } from '../../main-service.service';

@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.css']
})

export class TicketListComponent implements OnInit {
  tickets
  tickets2
  // :Observable<Ticket[]>;
  p:number=1;
  constructor(private mainService :MainServiceService,private router:Router) { }

  ngOnInit(): void {
    this.reloadData();
  }

  openNewTab(tid) :void {
    console.log(sessionStorage.getItem("tid"))
    sessionStorage.setItem("findid",tid);
    console.log(sessionStorage.getItem("findid"))
    // this.router.navigate(['ticket-stat'])
    window.open('./ticket-stat');
  }

  reloadData(){
    this.tickets2=this.mainService.getTicketList().subscribe(data=>{
      this.tickets =data;
      return data;
    },error=>console.log(error));
  }
  userDetails(id:number){
    this.router.navigate(['details',id])
    }
    editUser(id: number)
    {
      this.router.navigate(['update',id])
    }

    deleteUser(id: number)
    {
      this.mainService.deleteUser(id)
      .subscribe(data=>{
        console.log(data);
        this.reloadData();
      },
      error=> console.log(error));
    }
}
