import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddnewloanComponent } from './addnewloan/addnewloan.component';
import { EnquiryComponent } from './enquiry/enquiry.component';
import { LoanApplicantsComponent } from '../operational-manager/loan-applicants/loan-applicants.component';
import { viewApplicantsComponent } from './view-applicants/view-applicants.component';
import { ViewApplyLoanApplicantComponent } from './view-apply-loan-applicant/view-apply-loan-applicant.component';
<<<<<<< HEAD
import { EditLoanApplicantComponent } from './edit-loan-applicant/edit-loan-applicant.component';
=======
import { RejectedApplicantsComponent } from './rejected-applicants/rejected-applicants.component';
>>>>>>> 934bf33902e3054ea359be89ea6459e3017b3c83

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
  {
    path:'viewloanapplied',component:ViewApplyLoanApplicantComponent
  },
  {
<<<<<<< HEAD
    path:'edit/:s',component:EditLoanApplicantComponent
  } 
=======
    path:'rejectedapplicants',component:RejectedApplicantsComponent
  }  
>>>>>>> 934bf33902e3054ea359be89ea6459e3017b3c83
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CRMRoutingModule { }
