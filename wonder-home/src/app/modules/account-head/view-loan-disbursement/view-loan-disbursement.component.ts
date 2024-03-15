import { Component } from '@angular/core';
import { LoanDisbursementDetails } from '../../../model/loan-disbursement-details';

@Component({
  selector: 'app-view-loan-disbursement',
  templateUrl: './view-loan-disbursement.component.html',
  styleUrl: './view-loan-disbursement.component.css',
})
export class ViewLoanDisbursementComponent {
  loan: LoanDisbursementDetails[];
}
