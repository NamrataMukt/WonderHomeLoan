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
  step = 1;
  public showModal : boolean = false;
  constructor(private ms:MultistepService){}

    customerform:CustomerApplicationForm[];
    s:CustomerApplicationForm=new CustomerApplicationForm();
   
  ngOnInit(): void 
  {
   
    this.ms.getloanApplicant().subscribe(
      (data:CustomerApplicationForm[])=>
      {
        this.customerform=data;
      }

    )
    console.log(this.customerform)
  
  }
   
    showData(c:CustomerApplicationForm)
    {    
      
      this.showModal=true; 
      this.s=c;   
    }

  next()
  {
    this.step++
  }
  previous(){
    this.step--
  }
}
