import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OperationalManagerRoutingModule } from './operational-manager-routing.module';
import { LoanApplicantsComponent } from './loan-applicants/loan-applicants.component';


import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { ViewApplyLoanApplicantComponent } from './view-apply-loan-applicant/view-apply-loan-applicant.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    LoanApplicantsComponent,
    DashboardComponent,
    ViewApplyLoanApplicantComponent,

  ],
  imports: [
    CommonModule,
    OperationalManagerRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class OperationalManagerModule { }
