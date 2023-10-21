import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { DiscoverComponent } from './discover/discover.component';
import { SignUpComponent } from './authentication/sign-up/sign-up.component';
import { authGuard } from './shared/guards/auth.guard';

const routes: Routes = [
  { path: '', component: DiscoverComponent },
  { path: 'login', component: DiscoverComponent },
  { path: 'Products', loadChildren: () => import('./products/products.module').then(m => m.ProductsModule) },
  { path: 'contact', component: ContactUsComponent },
  { path: 'aboutUs', component: AboutUsComponent },
  { path: 'cart', loadChildren: () => import('./shopping/shopping.module').then(m => m.ShoppingModule) },
  { path: 'profile', loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule), canActivate: [authGuard] },
  { path: 'Sign-Up', component: SignUpComponent },
  { path: 'Not-found', component: NotFoundComponent },
  { path: '**', redirectTo: 'Not-found' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
