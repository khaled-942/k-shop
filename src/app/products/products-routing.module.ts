import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsHomeComponent } from './products-home/products-home.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

const routes: Routes = [
  {path: '', component: ProductsHomeComponent},
  {
    path: 'item/:id',
    component: ProductDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
