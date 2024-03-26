import { Component, OnInit } from '@angular/core';
import { MultistepService } from '../../../services/multistep.service';
import { Router } from '@angular/router';
import { CustomerApplicationForm } from '../../../model/customer-application-form';

@Component({
  selector: 'app-verifiedapplications',
  templateUrl: './verifiedapplications.component.html',
  styleUrl: './verifiedapplications.component.css'
})
export class VerifiedapplicationsComponent  implements OnInit 
{
  step = 1;
  public showModal : boolean = false;
  constructor(private ms:MultistepService ,private router: Router){}

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
  sanction(){
   
      this.router.navigate(['/user-dashboard/CreditManager/sanctionapplications']);
    
  }
  
  
}
