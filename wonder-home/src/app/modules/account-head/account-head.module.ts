import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountHeadRoutingModule } from './account-head-routing.module';
import { LedgerManagementComponent } from './ledger-management/ledger-management.component';
import { LoanDisbursementComponent } from './loan-disbursement/loan-disbursement.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ViewLoanDisbursementComponent } from './view-loan-disbursement/view-loan-disbursement.component';
import { ViewLedgerComponent } from './view-ledger/view-ledger.component';
import { ViewSanctionAppliantComponent } from './view-sanction-appliant/view-sanction-appliant.component';

@NgModule({
  declarations: [
    LedgerManagementComponent,
    LoanDisbursementComponent,
    ViewLoanDisbursementComponent,
    ViewLedgerComponent,
    ViewSanctionAppliantComponent,
  ],
  imports: [
    CommonModule,
    AccountHeadRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class AccountHeadModule {}
