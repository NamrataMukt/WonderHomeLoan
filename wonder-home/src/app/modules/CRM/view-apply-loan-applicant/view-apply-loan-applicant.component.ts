import { Component, OnInit } from '@angular/core';
import { MultistepService } from '../../../services/multistep.service';
import { CustomerApplicationForm } from '../../../model/customer-application-form';

@Component({
  selector: 'app-view-apply-loan-applicant',
  templateUrl: './view-apply-loan-applicant.component.html',
  styleUrl: './view-apply-loan-applicant.component.css'
})
export class ViewApplyLoanApplicantComponent implements OnInit 
{
    constructor(private ms:MultistepService,){}

    customerform:CustomerApplicationForm[];
    
  ngOnInit(): void 
  {
    this.ms.getloanApplicant().subscribe(
      (data:CustomerApplicationForm[])=>
      {
        this.customerform=data;
      }
    )
  
  }

}
