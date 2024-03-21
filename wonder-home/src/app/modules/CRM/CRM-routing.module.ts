import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddnewloanComponent } from './addnewloan/addnewloan.component';
import { EnquiryComponent } from './enquiry/enquiry.component';
import { LoanApplicantsComponent } from '../operational-manager/loan-applicants/loan-applicants.component';
import { viewApplicantsComponent } from './view-applicants/view-applicants.component';

const routes: Routes = [
  
  {
    path: 'enquiry', component: EnquiryComponent
  },
  {
    path: 'view_applicants', component:viewApplicantsComponent
  },
  {
    path: 'addnewloan', component: AddnewloanComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CRMRoutingModule { }
