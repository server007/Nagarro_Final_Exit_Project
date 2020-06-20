import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from './authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'NagarroTravelPortal';
  bool2:boolean
  bool3:boolean
  constructor(private router: Router, public loginService:AuthenticationService) { }
  ngOnInit(): void {
  }

  // userLoggedIn(){
  // this.bool2=this.loginService.isUserLoggedIn()
  // }
}
