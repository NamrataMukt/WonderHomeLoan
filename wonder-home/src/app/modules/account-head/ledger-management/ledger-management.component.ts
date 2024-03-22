import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-ledger-management',
  templateUrl: './ledger-management.component.html',
  styleUrl: './ledger-management.component.css',
})
export class LedgerManagementComponent implements OnInit {
  constructor(private fb: FormBuilder) {}

  ledgerForm: FormGroup;

  ngOnInit(): void {
    this.ledgerForm = this.fb.group({
      ledgerId: [],
      ledgerCreatedDate: [],
      totalLoanAmount: [],
      payableAmountWithInterest: [],
      tenure: [],
      monthlyEmi: [],
      amountPaidTillDate: [],
      remainingAmount: [],
      nextEmiDateStart: [],
      nextEmiDateEnd: [],
      defaulterCount: [],
      previousEmiStatus: [],
      currentMonthEmiStatus: [],
      loanEndDate: [],
      loanStatus: [],
    });
  }
  onSubmit() {}
}
