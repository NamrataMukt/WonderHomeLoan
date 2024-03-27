import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreditmanagerRoutingModule } from './creditmanager-routing.module';

import { VerifiedapplicationsComponent } from './verifiedapplications/verifiedapplications.component';

import { CreditprocedureComponent } from './creditprocedure/creditprocedure.component';
import { SacnctionapplicationComponent } from './sacnctionapplication/sacnctionapplication.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ViewSanctionapplicationComponent } from './view-sanctionapplication/view-sanctionapplication.component';


@NgModule({
  declarations: [
    
    VerifiedapplicationsComponent,
   
    CreditprocedureComponent,
    SacnctionapplicationComponent,
    ViewSanctionapplicationComponent
  ],
  imports: [
    CommonModule,
    CreditmanagerRoutingModule,
    ReactiveFormsModule,
    FormsModule
  
  ]
})
export class CreditmanagerModule { }
