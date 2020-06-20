import { NgModule } from '@angular/core';
import { NavComponent } from './container/nav.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    NavComponent
  ],
  imports: [
    FormsModule,
    CommonModule
  ],
  exports: [
    NavComponent
  ]
})
export class NavModule {

}
