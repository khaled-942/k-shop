import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductsHomeComponent } from './products-home/products-home.component';
import { ProductViewComponent } from './product-view/product-view.component';
import { PRecentViewComponent } from './product-view/p-recent-view/p-recent-view.component';


@NgModule({
  declarations: [
    ProductListComponent,
    ProductItemComponent,
    ProductDetailsComponent,
    ProductsHomeComponent,
    ProductViewComponent,
    PRecentViewComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
