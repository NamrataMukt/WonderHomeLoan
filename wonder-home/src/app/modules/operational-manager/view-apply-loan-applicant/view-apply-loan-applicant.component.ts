import { Component } from '@angular/core';
import { MultistepService } from '../../../services/multistep.service';
import { Router } from '@angular/router';
import { CustomerApplicationForm } from '../../../model/customer-application-form';
import { FormBuilder, FormGroup } from '@angular/forms';
import { StatuscheckService } from '../../../services/statuscheck.service';
import { StatusCheck } from '../../../model/status-check';

@Component({
  selector: 'app-view-apply-loan-applicant',
  templateUrl: './view-apply-loan-applicant.component.html',
  styleUrl: './view-apply-loan-applicant.component.css'
})
export class ViewApplyLoanApplicantComponent 
{
  step = 1;
  public showModal : boolean = false;
  
  
  constructor(private fb:FormBuilder,private sc:StatuscheckService, private ms:MultistepService,private router: Router){}

    customerform:CustomerApplicationForm[];
    s:CustomerApplicationForm=new CustomerApplicationForm();
    statuscheck:StatusCheck[];
  status:string;
   
    applicantno:string;

  ngOnInit(): void 
  {
    
     this.ms.getloanApplicant().subscribe(
      (data:CustomerApplicationForm[])=>
      {
        this.customerform=data;
      }     

    )
    
   /* this.sc.getstatus().subscribe(
      (data:StatusCheck[])=>
      {
        this.statuscheck=data;
        
      })   */
 }
    showData(c:CustomerApplicationForm)
    {   
      
      this.showModal=true; 
  
      this.s=c;   
      
      console.log(this.s);
    }

  next()
  {
    this.step++
  }
  previous(){
    this.step--
  }
  

  closeModal()
  {
    this.showModal=false;
    location.reload();
  }
  updateStatus(applicantno:string,status1:string)
  {
    alert("Applicant "+status1+ "!!!!");

    this.sc.savestatusData(applicantno,status1).subscribe();
    
  }


}
