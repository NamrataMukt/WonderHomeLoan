import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OperationalManagerRoutingModule } from './operational-manager-routing.module';
import { LoanApplicantsComponent } from './loan-applicants/loan-applicants.component';


import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';


import { VerifiedEnquiriesComponent } from './verified-enquiries/verified-enquiries.component';

import { RejectedEnquiriesComponent } from './rejected-enquiries/rejected-enquiries.component';



@NgModule({
  declarations: [
    LoanApplicantsComponent,
    DashboardComponent,
    VerifiedEnquiriesComponent,
    RejectedEnquiriesComponent
  ],
  imports: [
    CommonModule,
    OperationalManagerRoutingModule,
    HttpClientModule
  ]
})
export class OperationalManagerModule { }
