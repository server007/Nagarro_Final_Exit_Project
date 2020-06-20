import { NgModule } from '@angular/core';
import { SignUpComponent } from './container/sign-up.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    SignUpComponent
  ],
  imports: [
    FormsModule,
    CommonModule
  ],
  exports: [
    SignUpComponent
  ]
})
export class SignUpModule {

}
