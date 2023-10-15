import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccoutComponent } from './accout/accout.component';

const routes: Routes = [
  {
    path: '',
    component: AccoutComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileRoutingModule {}
