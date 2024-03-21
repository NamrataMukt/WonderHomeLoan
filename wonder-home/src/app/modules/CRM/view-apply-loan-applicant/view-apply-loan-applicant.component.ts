import { Component, OnInit } from '@angular/core';
import { MultistepService } from '../../../services/multistep.service';
import { CustomerBasicDetails } from '../../../model/customer-basic-details';

@Component({
  selector: 'app-view-apply-loan-applicant',
  templateUrl: './view-apply-loan-applicant.component.html',
  styleUrl: './view-apply-loan-applicant.component.css'
})
export class ViewApplyLoanApplicantComponent implements OnInit 
{
    constructor(private ms:MultistepService,){}

    customerform:CustomerBasicDetails[]
    
  ngOnInit(): void 
  {
    this.ms.getloanApplicant().subscribe(
      (data:CustomerBasicDetails[])=>
      {
        this.customerform=data;
      }
    )
  
  }

}
