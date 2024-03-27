import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddnewloanComponent } from './addnewloan/addnewloan.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EnquiryComponent } from './enquiry/enquiry.component';
import { CRMRoutingModule } from './CRM-routing.module';
import { viewApplicantsComponent } from './view-applicants/view-applicants.component';
import { ViewApplyLoanApplicantComponent } from './view-apply-loan-applicant/view-apply-loan-applicant.component';
<<<<<<< HEAD
import { EditLoanApplicantComponent } from './edit-loan-applicant/edit-loan-applicant.component';
=======
import { RejectedApplicantsComponent } from './rejected-applicants/rejected-applicants.component';
>>>>>>> 934bf33902e3054ea359be89ea6459e3017b3c83



@NgModule({
  declarations: [
    AddnewloanComponent,
    EnquiryComponent,
    viewApplicantsComponent,
    ViewApplyLoanApplicantComponent,
<<<<<<< HEAD
    EditLoanApplicantComponent
=======
    RejectedApplicantsComponent
>>>>>>> 934bf33902e3054ea359be89ea6459e3017b3c83
  ],
  imports: [
    CommonModule,
    CRMRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CRMModule { }
