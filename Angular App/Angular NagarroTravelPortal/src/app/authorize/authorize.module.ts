import {SignUpComponent} from './sign-up/container/sign-up.component'
import { NgModule } from '@angular/core';
import {AuthorizeComponent} from './authorize.component';
import { SignUpModule } from './sign-up/sign-up.module';
import { LoginModule } from './login/login.module';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ForgotPassComponent } from './forgot-pass/forgot-pass.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { RegConfComponent } from './reg-conf/reg-conf.component';
import { LogoutComponent } from './logout/logout.component';


@NgModule({
    declarations:[
        AuthorizeComponent,
        ForgotPassComponent,
        AdminLoginComponent,
        RegConfComponent,
        LogoutComponent
    ],
    imports:[
        LoginModule,
        SignUpModule,
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        BrowserAnimationsModule,
        FormsModule
    ],
    exports:[
        AuthorizeComponent,
        FormsModule,
        AppRoutingModule
    ]
})

export class AuthorizeModule{
    
}
