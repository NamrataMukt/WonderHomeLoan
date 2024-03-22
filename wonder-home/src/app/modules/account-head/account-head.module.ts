import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountHeadRoutingModule } from './account-head-routing.module';
import { LedgerManagementComponent } from './ledger-management/ledger-management.component';
import { LoanDisbursementComponent } from './loan-disbursement/loan-disbursement.component';
import { DefaulterstableComponent } from './defaulterstable/defaulterstable.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ViewLoanDisbursementComponent } from './view-loan-disbursement/view-loan-disbursement.component';
import { ViewLedgerComponent } from './view-ledger/view-ledger.component';

@NgModule({
  declarations: [
    LedgerManagementComponent,
    LoanDisbursementComponent,
    DefaulterstableComponent,
    ViewLoanDisbursementComponent,
    ViewLedgerComponent,
  ],
  imports: [
    CommonModule,
    AccountHeadRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class AccountHeadModule {}
