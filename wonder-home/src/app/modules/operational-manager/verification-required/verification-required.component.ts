import { Component, OnInit } from '@angular/core';
import { EnquiryService } from '../../../services/enquiry.service';
import { CustomerApplicationForm } from '../../../model/customer-application-form';
import { MultistepService } from '../../../services/multistep.service';

@Component({
  selector: 'app-verification-required',
  templateUrl: './verification-required.component.html',
  styleUrl: './verification-required.component.css'
})
export class VerificationRequiredComponent implements OnInit 
{
  step = 1;
  public showModal : boolean = false;
  constructor(private ms:MultistepService,private ps:EnquiryService ){}

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
  forward()
{}  



  getApplicant(): void {
    this.ps.getEnquiry().subscribe((data: any[]) => {
      this.applicants = data; 
    });
  }

}

