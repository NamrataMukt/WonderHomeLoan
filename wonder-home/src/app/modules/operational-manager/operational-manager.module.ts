import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OperationalManagerRoutingModule } from './operational-manager-routing.module';
import { LoanApplicantsComponent } from './loan-applicants/loan-applicants.component';
import { ApprovedCustomerComponent } from './approved-customer/approved-customer.component';
import { VerificationRequiredComponent } from './verification-required/verification-required.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { VerifiedApplicationsComponent } from './verified-applications/verified-applications.component';
import { VerifiedEnquiriesComponent } from './verified-enquiries/verified-enquiries.component';
import { RejectesEnquiriesComponent } from './rejectes-enquiries/rejectes-enquiries.component';
import { RejectedEnquiriesComponent } from './rejected-enquiries/rejected-enquiries.component';


@NgModule({
  declarations: [
    LoanApplicantsComponent,
    ApprovedCustomerComponent,
    VerificationRequiredComponent,
    DashboardComponent,
    VerifiedApplicationsComponent,
    VerifiedEnquiriesComponent,
    RejectesEnquiriesComponent,
    RejectedEnquiriesComponent
  ],
  imports: [
    CommonModule,
    OperationalManagerRoutingModule,
    HttpClientModule
  ]
})
export class OperationalManagerModule { }
