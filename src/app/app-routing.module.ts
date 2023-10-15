import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';

const routes: Routes = [
  { path: '', component: NotFoundComponent },
  { path: 'Home', loadChildren:()=> import('./products/products.module').then(m => m.ProductsModule) },
  { path: 'wishList',loadChildren:()=> import('./wish-list/wish-list.module').then(m => m.WishListModule) },
  { path: 'contact', component: ContactUsComponent },
  { path: 'aboutUs', component: AboutUsComponent },
  { path: 'cart', loadChildren: () => import('./shopping/shopping.module').then(m => m.ShoppingModule) },
  { path: 'profile', loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule)  },
  { path: 'Not-found', component: NotFoundComponent },
  { path: '**', redirectTo: 'Not-found' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
