import { Component, OnInit } from '@angular/core';
import { User } from '../../user';
import { MainServiceService } from '../../main-service.service';
import { Router } from '@angular/router';
import { SignUpComponent } from '../sign-up/container/sign-up.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedService } from '../../shared.service';

@Component({
  selector: 'app-reg-conf',
  templateUrl: './reg-conf.component.html',
  styleUrls: ['./reg-conf.component.css']
})
export class RegConfComponent implements OnInit {

  constructor(private ss: SharedService,private mainService :MainServiceService,private router:Router) { }

  user2:User=this.ss.userinfo;

  ngOnInit(): void {
  }

  save() {
    this.mainService.newUser(this.user2)
    .subscribe(data => console.log(data), error => console.log(error));
    this.ss.userinfo= new User();
    this.gotoList();
    }
    
    onSubmit() {
    // this.submitted = true;
      /*This will create random password*/
      var randomstring = Math.random().toString(36).slice(-8);
      this.user2.password=randomstring;
      this.save();
    }
    
    gotoList() {
      // this.regConf.user2=this.user;
      // this.router.navigate(['/reg-conf']);
      this.router.navigate(['']);
      
    }

    printComponent(cmpName) {
      let printContents = document.getElementById(cmpName).innerHTML;
      let originalContents = document.body.innerHTML;
 
      document.body.innerHTML = printContents;
 
      window.print();
 
      document.body.innerHTML = originalContents;
 }

    editDoc(){
      this.router.navigate(['/sign-up']);
    }

}
