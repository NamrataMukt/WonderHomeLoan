import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-loan-disbursement',
  templateUrl: './loan-disbursement.component.html',
  styleUrl: './loan-disbursement.component.css',
})
export class LoanDisbursementComponent implements OnInit {
  constructor(private fb: FormBuilder) {}

  loanDisbursementForm: FormGroup;

  ngOnInit(): void {
    this.loanDisbursementForm = this.fb.group({
      aggrementId: [],
      loanNumber: [],
      aggrementDate: [],
      amountPayType: [],
      totalAmount: [],
      bankName: [],
      accountNumber: [],
      ifscCode: [],
      accountType: [],
      transferAmount: [],
      paymentStatus: [],
      amountPaidDate: [],
    });
  }

  onSubmit() {
    alert('save');
  }
}
