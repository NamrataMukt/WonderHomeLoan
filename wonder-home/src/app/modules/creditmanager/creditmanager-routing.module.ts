import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CDashComponent } from './c-dash/c-dash.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'c-dash', pathMatch: 'full' 
  },
  {
    path:'c-dash',component:CDashComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreditmanagerRoutingModule { }
