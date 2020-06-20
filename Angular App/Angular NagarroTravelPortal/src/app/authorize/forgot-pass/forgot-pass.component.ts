import { Component, OnInit } from '@angular/core';
import { User } from '../../user';
import { AppComponent } from '../../app.component';
import { AuthenticationService } from '../../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-pass',
  templateUrl: './forgot-pass.component.html',
  styleUrls: ['./forgot-pass.component.css']
})
export class ForgotPassComponent implements OnInit {

  user :User=new User();
  invalidEmail=false;
  errorMessage='Invalid Credentials'
  constructor(private router: Router, private loginservice:AuthenticationService,private appComp:AppComponent) { }

  ngOnInit(): void {
  }
  submit(){
    this.loginservice.authentication13(this.user)
    .subscribe(data => {
     // this.bool = data;
     if(data==true)
   {
     this.router.navigate(['']);
     this.invalidEmail=false;
   }
   else
   {
     this.invalidEmail=true;
   }
    }   , error => console.log(error));

 }
}
