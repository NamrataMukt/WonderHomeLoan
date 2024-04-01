import { Component, OnInit } from '@angular/core';
import { LoanDisbursementDetails } from '../../../model/loan-disbursement-details';
import { AdddisbursementService } from '../../../services/adddisbursement.service';

@Component({
  selector: 'app-view-loan-disbursement',
  templateUrl: './view-loan-disbursement.component.html',
  styleUrl: './view-loan-disbursement.component.css',
})
export class ViewLoanDisbursementComponent implements OnInit
{
  constructor(private ls:AdddisbursementService){

  }
loan:LoanDisbursementDetails[];
  ngOnInit(): void 
  {
  this.ls.getData().subscribe((data:any[]) =>{
      this.loan=data;
  });
  }

  


}
