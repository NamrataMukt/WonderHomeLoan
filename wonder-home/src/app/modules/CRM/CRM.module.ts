import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddnewloanComponent } from './addnewloan/addnewloan.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EnquiryComponent } from './enquiry/enquiry.component';
import { CRMRoutingModule } from './CRM-routing.module';
import { viewApplicantsComponent } from './view-applicants/view-applicants.component';
import { ViewApplyLoanApplicantComponent } from './view-apply-loan-applicant/view-apply-loan-applicant.component';
import { RejectedApplicantsComponent } from './rejected-applicants/rejected-applicants.component';



@NgModule({
  declarations: [
    AddnewloanComponent,
    EnquiryComponent,
    viewApplicantsComponent,
    ViewApplyLoanApplicantComponent,
    RejectedApplicantsComponent
  ],
  imports: [
    CommonModule,
    CRMRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CRMModule { }
