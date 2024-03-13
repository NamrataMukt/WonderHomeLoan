import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreditmanagerRoutingModule } from './creditmanager-routing.module';
import { CDashComponent } from './c-dash/c-dash.component';


@NgModule({
  declarations: [
    CDashComponent
  ],
  imports: [
    CommonModule,
    CreditmanagerRoutingModule
  ]
})
export class CreditmanagerModule { }
