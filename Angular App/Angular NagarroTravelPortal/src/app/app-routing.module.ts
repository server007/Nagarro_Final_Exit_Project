import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {LoginComponent} from './authorize/login/container/login.component';
import {SignUpComponent} from './authorize/sign-up/container/sign-up.component';

import { NavComponent } from './nav/container/nav.component';
import { AuthorizeComponent } from './authorize/authorize.component';
import { ForgotPassComponent } from './authorize/forgot-pass/forgot-pass.component';
import { AdminLoginComponent } from './authorize/admin-login/admin-login.component';
import { RegConfComponent } from './authorize/reg-conf/reg-conf.component';
import { HomeComponent } from './home/home.component';
import { TicketConfComponent } from './tickets/ticket-conf/ticket-conf.component';
import { TicketListComponent } from './tickets/ticket-list/ticket-list.component';
import { TicketReqComponent } from './tickets/ticket-req/ticket-req.component';
import { TicketStatComponent } from './tickets/ticket-stat/ticket-stat.component';
import { TicketReviewComponent } from './tickets/ticket-review/ticket-review.component';
import { TicketSubComponent } from './tickets/ticket-sub/ticket-sub.component';
import { AuthGuardService } from './auth-guard.service';
import { LogoutComponent } from './authorize/logout/logout.component';
import { NotFoundComponent } from './not-found/not-found.component';


const routes: Routes = [
  {path : '', component : LoginComponent },
  {path : 'nav',component: NavComponent},
  {path : 'sign-up', component : SignUpComponent},
  // {path : '', component: AuthorizeComponent}
  {path : 'forgot-pass', component :ForgotPassComponent},
  {path : 'admin-login', component : AdminLoginComponent},
  {path:'reg-conf',component:RegConfComponent},
  {path:'logout',component:LogoutComponent},

  {path:'home',component:HomeComponent,canActivate: [AuthGuardService]},

  {path:'ticket-conf',component:TicketConfComponent,canActivate:[AuthGuardService]},
  {path:'ticket-req',component:TicketReqComponent,canActivate:[AuthGuardService]},
  {path:'ticket-list',component:TicketListComponent,canActivate:[AuthGuardService]},
  {path:'ticket-stat',component:TicketStatComponent},

  {path:'ticket-review',component:TicketReviewComponent},
  {path:'ticket-sub',component:TicketSubComponent},

  {path: '404', component: NotFoundComponent},
  {path: '**', redirectTo: '/404'}

];


// const routes: Routes = [{path: '', component :HomeComponent},
// {path : 'about',component : AboutComponent},
// {path : 'contact-us',component: ContactUsComponent},
// {path : 'nav',component: NavComponent},
// {path : 'login', component : LoginComponent },
// {path : 'sign-up', component : SignUpComponent},
// {path: 'admin', component: AdminComponent },
// {path: 'details/:id', component: UserDetailsComponent},
// {path: 'update/:id', component:UpdateDetailsComponent},
// {path: 'updatebill', component:UpdateBillComponent},
// {path: 'updateconn', component:UpdateConnectionComponent},
// {path: 'user', component:UserComponent},
// {path: 'billsummary',component: BillSummaryComponent},
// {path: 'paybill',component: PayBillComponent},
// {path: 'changepass', component:ChangePasswordComponent}]



// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
