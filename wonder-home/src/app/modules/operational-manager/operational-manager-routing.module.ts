import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoanApplicantsComponent } from './loan-applicants/loan-applicants.component';


import { DashboardComponent } from './dashboard/dashboard.component';
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
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OperationalManagerRoutingModule { }
