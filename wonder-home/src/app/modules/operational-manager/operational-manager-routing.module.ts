import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoanApplicantsComponent } from './loan-applicants/loan-applicants.component';
import { ApprovedCustomerComponent } from './approved-customer/approved-customer.component';
import { VerificationRequiredComponent } from './verification-required/verification-required.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { VerifiedApplicationsComponent } from './verified-applications/verified-applications.component';

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
    path:'approved-customer',component:ApprovedCustomerComponent
  },
  {
    path:'verifiedapplications',component:VerifiedApplicationsComponent
  },
  {
    path:'verification-required',component:VerificationRequiredComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OperationalManagerRoutingModule { }
