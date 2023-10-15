import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WishListRoutingModule } from './wish-list-routing.module';
import { WishItemsComponent } from './wish-items/wish-items.component';


@NgModule({
  declarations: [
    WishItemsComponent
  ],
  imports: [
    CommonModule,
    WishListRoutingModule
  ]
})
export class WishListModule { }
