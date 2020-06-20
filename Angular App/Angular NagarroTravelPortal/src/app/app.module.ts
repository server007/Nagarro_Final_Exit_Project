import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import{HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SignUpComponent } from './authorize/sign-up/container/sign-up.component';
import { FooterComponent } from './footer/container/footer.component';
import { AuthorizeModule } from './authorize/authorize.module';
import { FooterModule } from './footer/footer.module';
import { NavComponent } from './nav/container/nav.component';
import { AuthorizeComponent } from './authorize/authorize.component';
import { TicketReqComponent } from './tickets/ticket-req/ticket-req.component';
import { TicketStatComponent } from './tickets/ticket-stat/ticket-stat.component';
import { TicketConfComponent } from './tickets/ticket-conf/ticket-conf.component';
import { TicketSubComponent } from './tickets/ticket-sub/ticket-sub.component';
import { TicketListComponent } from './tickets/ticket-list/ticket-list.component';
import { TicketReviewComponent } from './tickets/ticket-review/ticket-review.component';
import { HomeComponent } from './home/home.component';

import { AuthGuardService } from './auth-guard.service';
import { OpenLinkInNewWindowDirective } from './olinw.directive';
import { NotFoundComponent } from './not-found/not-found.component';

import {NgxPaginationModule} from 'ngx-pagination';
// import { NgxPaginationModule } from 'ngx-pagination';



@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    TicketReqComponent,
    TicketStatComponent,
    TicketConfComponent,
    TicketSubComponent,
    TicketListComponent,
    TicketReviewComponent,
    HomeComponent,
    OpenLinkInNewWindowDirective,
    NotFoundComponent
    // SignUpComponent,
    // FooterComponent,
    // AuthorizeModule
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    // BrowserAnimationsModule,

    AuthorizeModule,
    FooterModule,

    NgxPaginationModule
    
  ],
  exports:[
    // MatButtonModule,
    // MatFormFieldModule,
    // MatInputModule
  ],
  providers: [AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
