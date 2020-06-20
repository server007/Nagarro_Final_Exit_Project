import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import {FormsModule} from '@angular/forms';
import { AuthenticationService } from "../../authentication.service";
import { AppComponent } from "../../app.component";
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Admin } from "../../admin";

@Component({
    selector: 'admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})

export class AdminLoginComponent implements OnInit {

  username='';
  password='';
  admin :Admin=new Admin();
  invalidLogin=false;
  errorMessage='Inavlid Credentials'
  successMessage: string;
  loginSuccess=false;

  constructor(private router: Router, private loginservice:AuthenticationService,private appComp:AppComponent) { }

  ngOnInit(): void {
  }
//  bool:boolean;

  checkLogin()
  {
     this.loginservice.authentication12(this.admin)
     .subscribe(data => {
      if(data==true)
    {
    // sessionStorage.setItem("name",this.user2.firstName);
      // this.loginservice.userLoggedIn(this.user2.firstName)
    //   sessionStorage.setItem("name",this.user3.email)
      this.router.navigate(['/ticket-sub']);
      this.invalidLogin=false;
      this.loginSuccess=true;
      this.successMessage='Login Successful';
      this.appComp.bool3=true;
    }
    else
    {
      this.invalidLogin=true;
      this.loginSuccess=false;
    }
}, error => console.log(error));

  }
  //   if(this.loginservice.authentication1(this.user2))
  //   {
  //     console.log("bool",this.bool)
  //     this.router.navigate(['/sign-up']);
  //     this.invalidLogin=false;
  //     this.loginSuccess=true
  //     this.successMessage='Login Successful';

  //   }
  //   else
  //   {
  //     this.invalidLogin=true;
  //     this.loginSuccess=false;
  //   }
  // }

  // checkLogin() {
  //   (this.loginservice.authenticate(this.username, this.password).subscribe(
  //     data => {
  //       this.router.navigate(['/sign-up'])
  //       this.invalidLogin = false
  //     },
  //     error => {
  //       this.invalidLogin = true
  //     }
  //   )
  //   );
  // }

}
