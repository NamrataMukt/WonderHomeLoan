import { Component, OnInit } from '@angular/core';
import { MultistepService } from '../../../services/multistep.service';
import { CustomerApplicationForm } from '../../../model/customer-application-form';
import { Router } from '@angular/router';

import { EnquiryService } from '../../../services/enquiry.service';

@Component({
  selector: 'app-approved-customer',
  templateUrl: './approved-customer.component.html',
  styleUrl: './approved-customer.component.css'
})
export class ApprovedCustomerComponent implements OnInit 
{
  step = 1;
  public showModal : boolean = false;
  constructor(private ms:MultistepService,private router: Router,private ps:EnquiryService){}

    customerform:CustomerApplicationForm[];
    s:CustomerApplicationForm=new CustomerApplicationForm();
    applicants: any[] = [];
    
  ngOnInit(): void 
  {
    this.getApplicant(); 
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
  // this.m=CustomerApplicationFor{ key: 'value' };
  verify(){

    // this.router.navigate(['/user-dashboard/opm/verifiedapplications']);
  }
  Reject(){
    this.router.navigate(['/user-dashboard/opm/verification-required']);
  }
  


  getApplicant(): void {
    this.ps.getEnquiry().subscribe((data: any[]) => {
      this.applicants = data; 
    });
  }

}

