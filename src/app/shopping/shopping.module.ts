import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShoppingRoutingModule } from './shopping-routing.module';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { DataViewModule } from 'primeng/dataview';
import { RatingModule } from 'primeng/rating';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
@NgModule({
  declarations: [
    ShoppingListComponent
  ],
  imports: [
    CommonModule,
    DataViewModule,
    RatingModule,
    FormsModule,
    ButtonModule,
    TagModule,
    ShoppingRoutingModule
  ]
})
export class ShoppingModule { }
