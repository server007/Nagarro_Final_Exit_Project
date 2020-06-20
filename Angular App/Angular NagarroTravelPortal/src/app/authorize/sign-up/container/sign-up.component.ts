import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import {User} from '../../../user';
import {FormsModule} from '@angular/forms';
import {MainServiceService} from '../../../main-service.service';
import { Router } from '@angular/router';
import { RegConfComponent } from '../../reg-conf/reg-conf.component';
import { SharedService } from '../../../shared.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  countries:String[]=["India", "Germany"]
  states:String[]=["Uttar Pradesh", "Mumbai", "Haryana"]
  state:"select";
  country:"select"
  user :User=this.ss.userinfo

  // if((this.ss.userinfo)!=null){
  //   this.user =this.ss.userinfo;  
  // }
  submitted=false;

  constructor(public ss: SharedService,private router:Router) { }

  ngOnInit(): void {
  }

  newUser(): void {
    // this.submitted = false;
    this.user= new User();
    }
    
    // save() {
    // this.billService.newUser(this.user)
    // .subscribe(data => console.log(data), error => console.log(error));
    // this.user= new User();
    // this.gotoList();
    // }
    
    onSubmit() {
    // this.submitted = true;
      /*This will create random password*/
      // var randomstring = Math.random().toString(36).slice(-8);
      // this.user.password=randomstring;
      // this.save();
      this.ss.userinfo=this.user;
      this.router.navigate(['/reg-conf']);
    }
    
    // gotoList() {
      // this.regConf.user2=this.user;
      // this.router.navigate(['/reg-conf']);
      // this.router.navigate(['']);


    // }

}
