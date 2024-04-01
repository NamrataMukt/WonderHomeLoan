import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoanApplicantsComponent } from './loan-applicants/loan-applicants.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { VerifiedEnquiriesComponent } from './verified-enquiries/verified-enquiries.component';
import { RejectedEnquiriesComponent } from './rejected-enquiries/rejected-enquiries.component';
import { ViewApplyLoanApplicantComponent } from './view-apply-loan-applicant/view-apply-loan-applicant.component';




const routes: Routes = [
  {
    path: '', redirectTo: 'dashboard', pathMatch: 'full' 
  },
  {
      path:'dashboard',component:DashboardComponent
    
  },
  {
    path:'applicants',component:LoanApplicantsComponent
  },
  {
    path:'viewloanapplied',component:ViewApplyLoanApplicantComponent
  },
  {
    path:'verified-enquiries',component:VerifiedEnquiriesComponent
  },
  {
    path:'rejected-enquiries',component:RejectedEnquiriesComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OperationalManagerRoutingModule { }
