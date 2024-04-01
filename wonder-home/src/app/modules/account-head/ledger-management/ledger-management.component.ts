import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AddledgerService } from '../../../services/addledger.service';

@Component({
  selector: 'app-ledger-management',
  templateUrl: './ledger-management.component.html',
  styleUrl: './ledger-management.component.css',
})
export class LedgerManagementComponent implements OnInit {
  constructor(private fb: FormBuilder, private al:AddledgerService) {}

  ledgerForm: FormGroup;

  ngOnInit(): void {
    this.ledgerForm = this.fb.group({
      ledgerId: [],
      ledgerCreatedDate: [],
      loannumber:[],
      customername:[],
      totalLoanAmount: [],
      payableAmountWithInterest: [],
      tenure: [],
      monthlyEmi: [],
      amountPaidTillDate: [],
      remainingAmount: [],
      defaulterCount: [],
      emiPayDate: [],
      loanStatus: [],
    });
  }
 onSubmit() {
    console.log(this.ledgerForm.value);
    this.al.saveLedger(this.ledgerForm.value).subscribe();
    this.ledgerForm.reset();
  }
}
