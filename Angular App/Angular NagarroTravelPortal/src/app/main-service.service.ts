import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainServiceService {
  private baseUrl='http://localhost:8090/travelportal/api/user';
  private baseUrl6='http://localhost:8090/travelportal/api/ticketList';
  private baseUrl5='http://localhost:8090/travelportal/api/ticket';
  private baseUrl8='http://localhost:8090/travelportal/api/allTickets';
  private baseUrl9='http://localhost:8090/travelportal/api/updTicket';


  private baseUrl7='http://localhost:8090/travelportal/api/findticket';


  private baseUrl2='http://localhost:8090/travelportal/api/conn';
  private baseUrl3='http://localhost:8090/travelportal/api/conn';
  private baseUrl4='http://localhost:8090/travelportal/api/billList/3';
  constructor(private http: HttpClient) { }

  // getBillList(id: number):Observable<any>{
  //   return this.http.get(`${this.baseUrl4}`);
  // }

  // getUser(id: number): Observable<any> {
// return this.http.get(`${this.baseUrl}/${id}`);
// }

  getTicketList():Observable<any>{
    return this.http.get(`${this.baseUrl6}/${sessionStorage.getItem("id")}`);
  }

  getTicket(tid):any{
    return this.http.get(`${this.baseUrl7}/${tid}`);
  }

  getTicketsList():Observable<any>{
    return this.http.get(`${this.baseUrl8}`);
  }

  newUser(user: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, user);
    }

  newTicket(ticket: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl5}/${sessionStorage.getItem("id")}`, ticket);
    }

  updTicket(ticket: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl9}`, ticket);
    }


  newConnection(connection: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl2}`, connection);
    }

    newBill(bill: Object): Observable<Object> {
      return this.http.post(`${this.baseUrl3}`, bill);
      }

updateUser(id:number, value:any) :Observable<Object>{
  return this.http.put(`${this.baseUrl}/${id}`, value);
}
deleteUser(id:number) :Observable<any>{
  return this.http.delete(`${this.baseUrl}/${id}`, {responseType:'text'});
}
}
