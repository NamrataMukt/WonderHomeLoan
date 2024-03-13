import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LedgerManagementComponent } from './ledger-management/ledger-management.component';
import { LoanDisbursementComponent } from './loan-disbursement/loan-disbursement.component';
import { DefaulterstableComponent } from './defaulterstable/defaulterstable.component';

const routes: Routes = [

  {
    path:'ledger',component:LedgerManagementComponent
  },
  {
    path:'loandisbursement',component:LoanDisbursementComponent
  },
  {
    path:'defaulter',component:DefaulterstableComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountHeadRoutingModule { }
