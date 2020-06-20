import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from '../../app.component';
import { AuthGuardService } from '../../auth-guard.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private router:Router,private loading:AuthGuardService,private appComp:AppComponent) { }

  ngOnInit(): void {
    sessionStorage.removeItem("email");
      sessionStorage.removeItem("id");
      localStorage.removeItem("token");
    this.router.navigate(['']);
    this.appComp.bool2=false;
    this.appComp.bool3=false;

    this.loading.loadit=false;
  }


}
