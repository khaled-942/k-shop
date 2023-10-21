import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { ProductsModule } from './products/products.module';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ShoppingModule } from './shopping/shopping.module';
import { DiscoverComponent } from './discover/discover.component';
import { DividerModule } from 'primeng/divider';
import { AuthenticationModule } from './authentication/authentication.module';
import { LoaderComponent } from './loader/loader.component';
import { RequestsInterceptor } from './requests.interceptor';
@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
    ContactUsComponent,
    DiscoverComponent,
    LoaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProductsModule,
    ShoppingModule,
    SharedModule,
    DividerModule,
    AuthenticationModule
  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,
      useClass:RequestsInterceptor,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
