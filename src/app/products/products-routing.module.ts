import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsHomeComponent } from './products-home/products-home.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { AllProductsComponent } from './all-products/all-products.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  { path: '', component: ProductsHomeComponent },
  {
    path: 'item/:id',
    component: ProductDetailsComponent,
  },
  { path: 'all', component: AllProductsComponent },
  { path: 'search/:text', component: SearchComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsRoutingModule {}
