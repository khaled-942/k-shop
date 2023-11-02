import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AppRoutingModule } from '../app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { BadgeModule } from 'primeng/badge';
import { AlertsComponent } from './components/alerts/alerts.component';

@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    NotFoundComponent,
    AlertsComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    BadgeModule
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    AlertsComponent
  ]
})
export class SharedModule { }
