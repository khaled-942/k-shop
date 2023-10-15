import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WishItemsComponent } from './wish-items/wish-items.component';

const routes: Routes = [
  {
    path: '',
    component: WishItemsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WishListRoutingModule {}
