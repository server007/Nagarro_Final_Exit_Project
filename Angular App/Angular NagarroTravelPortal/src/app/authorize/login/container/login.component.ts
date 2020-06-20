import { Component, OnInit } from "@angular/core";
import { User } from "../../../user";
import { Router } from "@angular/router";
import {FormsModule} from '@angular/forms';
import { AuthenticationService } from "../../../authentication.service";
import { AppComponent } from "../../../app.component";
import { AuthGuardService } from "../../../auth-guard.service";

@Component({
    selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  
  username='';
  password='';
  user2 :User=new User();
  invalidLogin=false;
  errorMessage='Inavlid Credentials'
  successMessage: string;
  loginSuccess=false;
  

  constructor(private router: Router,private loading:AuthGuardService, private loginservice:AuthenticationService,private appComp:AppComponent) { }

  ngOnInit(): void {
    
  }
//  bool:boolean;

  checkLogin()
  {
     this.loginservice.authentication1(this.user2)
     .subscribe(data => {
      //  console.log(data=="b")
      // this.bool = data;
      if(data!=0)
    {
    // sessionStorage.setItem("name",this.user2.firstName);
      // this.loginservice.userLoggedIn(this.user2.firstName)
      sessionStorage.setItem("email",this.user2.email);
      sessionStorage.setItem("id",data+"");
      localStorage.setItem("token","valid");
      this.router.navigate(['/home']);
      this.invalidLogin=false;
      this.loginSuccess=true;
      this.successMessage='Login Successful';
      this.appComp.bool2=true;
      this.loading.loadit=true;
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
