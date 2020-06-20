import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {User} from './user'
//Observable,


@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {
  private baseUrl20='http://localhost:8090/travelportal/api/loginUser';
  private baseUrl21='http://localhost:8090/travelportal/api/adminLoginUser';
  private baseUrl22='http://localhost:8090/travelportal/api/forgotPass';

  constructor(private http: HttpClient) { }
  // bo:boolean;
  authentication1(user):any{
    const x= this.http.post(`${this.baseUrl20}`,user)
    return x;
  }

  // authentication1(user):any{
  //   const x= this.http.post(`${this.baseUrl20}`,user,{responseType: 'text'})
  //   return x;
  // }

  authentication12(admin):any{
    const x= this.http.post(`${this.baseUrl21}`,admin)
    return x;
  }

  authentication13(user):any{
    const x= this.http.post(`${this.baseUrl22}`,user)
    return x;
  }

  // authentication(username,password){
  //   if(username =="urvashitomar02@gmail.com" && password=="123")
  //   {
  //     sessionStorage.setItem("username",username)
  //     return true;
  //   }
  //   else{
  //     return false;
  //   }
  // }
  isUserLoggedIn()
  {
    let user=sessionStorage.getItem('name');
    console.log(user!=null)
    return (user!=null)
  }
  logout()
  {
    sessionStorage.removeItem('name')
  }
}






/*
export class AuthenticationService {
  private baseUrl20='http://localhost:8090/travelportal/api/loginUser';
  // constructor(private http: HttpClient) { }
    constructor(private httpClient:HttpClient) { }

    authenticate(username, password) {
      const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
      return this.httpClient.get<Use>('http://localhost:8090/travelportal/api/loginUser',{headers}).pipe(
       map(
         userData => {
          sessionStorage.setItem('username',username);
          return userData;
         }
       )
      );
    }

*/