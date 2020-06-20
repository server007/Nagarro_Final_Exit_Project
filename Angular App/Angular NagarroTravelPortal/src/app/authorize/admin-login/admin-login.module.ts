import { NgModule } from '@angular/core';
import { AdminLoginComponent } from './admin-login.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AdminLoginComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  exports: [
    AdminLoginComponent
  ]
})
export class LoginModule {

}