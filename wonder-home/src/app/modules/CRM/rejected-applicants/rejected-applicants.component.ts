import { Component, OnInit } from '@angular/core';
import { MultistepService } from '../../../services/multistep.service';
import { CustomerApplicationForm } from '../../../model/customer-application-form';

@Component({
  selector: 'app-rejected-applicants',
  templateUrl: './rejected-applicants.component.html',
  styleUrl: './rejected-applicants.component.css'
})
export class RejectedApplicantsComponent implements OnInit 
{
  step = 1;
  public showModal : boolean = false;
  constructor(private ms:MultistepService ){}

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
  email()  {}
}

