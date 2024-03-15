import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddnewloanComponent } from './addnewloan/addnewloan.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EnquiryComponent } from './enquiry/enquiry.component';
import { CRMRoutingModule } from './CRM-routing.module';
import { viewApplicantsComponent } from './view-applicants/view-applicants.component';



@NgModule({
  declarations: [
    AddnewloanComponent,
    EnquiryComponent,
    viewApplicantsComponent
  ],
  imports: [
    CommonModule,
    CRMRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CRMModule { }
