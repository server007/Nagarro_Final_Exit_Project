import { NgModule } from "@angular/core";
import { FooterComponent } from "./container/footer.component";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";


@NgModule({
    declarations: [
        FooterComponent
    ],
    imports: [
      FormsModule,
      CommonModule
    ],
    exports: [
      FooterComponent
    ]
  })
  export class FooterModule {
  
  }
  