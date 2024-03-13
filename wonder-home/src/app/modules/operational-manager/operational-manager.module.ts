import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OperationalManagerRoutingModule } from './operational-manager-routing.module';
import { LoanApplicantsComponent } from './loan-applicants/loan-applicants.component';
import { ApprovedCustomerComponent } from './approved-customer/approved-customer.component';
import { VerificationRequiredComponent } from './verification-required/verification-required.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    LoanApplicantsComponent,
    ApprovedCustomerComponent,
    VerificationRequiredComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    OperationalManagerRoutingModule,
    HttpClientModule
  ]
})
export class OperationalManagerModule { }
