import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EgyPipe } from './egy.pipe';



@NgModule({
  declarations: [
    EgyPipe
  ],
  imports: [
    CommonModule
  ],
  exports:[
    EgyPipe
  ]
})
export class PipesModModule { }
