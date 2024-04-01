import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LedgerManagementComponent } from './ledger-management/ledger-management.component';
import { LoanDisbursementComponent } from './loan-disbursement/loan-disbursement.component';

import { ViewLoanDisbursementComponent } from './view-loan-disbursement/view-loan-disbursement.component';
import { ViewLedgerComponent } from './view-ledger/view-ledger.component';
import { ViewSanctionAppliantComponent } from './view-sanction-appliant/view-sanction-appliant.component';

const routes: Routes = [
  {
    path:'viewsanction',component:ViewSanctionAppliantComponent
  },
  {
    path: 'ledger',
    component: LedgerManagementComponent,
  },
  { path: 'viewledger', component: ViewLedgerComponent },
  {
    path: 'loandisbursment/:sid',
    component: LoanDisbursementComponent,
  },
  {
    path: 'viewLoanDisbursement',
    component: ViewLoanDisbursementComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccountHeadRoutingModule {}
