import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { User } from './user';
import { Ticket } from './ticket';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
    userinfo=new User();
    ticketinfo=new Ticket();

}