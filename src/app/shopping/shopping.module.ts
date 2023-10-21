import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShoppingRoutingModule } from './shopping-routing.module';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RatingModule } from 'primeng/rating';
import { FormsModule } from '@angular/forms';
import { TagModule } from 'primeng/tag';
import { DividerModule } from 'primeng/divider';
import { ShoppinItemComponent } from './shoppin-item/shoppin-item.component';
import { PipesModModule } from '../pipes/pipes-mod/pipes-mod.module';
@NgModule({
  declarations: [
    ShoppingListComponent,
    ShoppinItemComponent,
  ],
  imports: [
    CommonModule,
    RatingModule,
    FormsModule,
    TagModule,
    DividerModule,
    PipesModModule,
    ShoppingRoutingModule
  ]
})
export class ShoppingModule { }
