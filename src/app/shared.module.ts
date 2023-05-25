import { NgModule } from "@angular/core";
import { HeaderComponent } from "./header.component";
import { MatCommonModule } from "@angular/material/core";
import { CommonModule } from '@angular/common';


const component = [
  HeaderComponent

]


@NgModule({
  imports: [MatCommonModule,
    CommonModule, ],
  declarations: [...component],
  exports: [...component],
})

export class SharedModule{

}
