import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LedgerManagementComponent } from './ledger-management/ledger-management.component';
import { LoanDisbursementComponent } from './loan-disbursement/loan-disbursement.component';
import { DefaulterstableComponent } from './defaulterstable/defaulterstable.component';
import { ViewLoanDisbursementComponent } from './view-loan-disbursement/view-loan-disbursement.component';
import { ViewLedgerComponent } from './view-ledger/view-ledger.component';

const routes: Routes = [
  {
    path: 'ledger',
    component: LedgerManagementComponent,
  },
  { path: 'viewledger', component: ViewLedgerComponent },
  {
    path: 'loandisbursement',
    component: LoanDisbursementComponent,
  },
  {
    path: 'defaulter',
    component: DefaulterstableComponent,
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
