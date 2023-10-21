import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { AccoutComponent } from './accout/accout.component';
import { AvatarModule } from 'primeng/avatar';

@NgModule({
  declarations: [
    AccoutComponent
  ],
  imports: [
    CommonModule,
    AvatarModule,
    ProfileRoutingModule
  ]
})
export class ProfileModule { }
