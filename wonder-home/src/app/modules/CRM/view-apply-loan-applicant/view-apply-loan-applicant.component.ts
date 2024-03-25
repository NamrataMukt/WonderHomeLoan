import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { MultistepService } from '../../../services/multistep.service';
import { CustomerApplicationForm } from '../../../model/customer-application-form';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-apply-loan-applicant',
  templateUrl: './view-apply-loan-applicant.component.html',
  styleUrl: './view-apply-loan-applicant.component.css'
})
export class ViewApplyLoanApplicantComponent implements OnInit 
{
  step = 1;
  public showModal : boolean = false;
  constructor(private ms:MultistepService, private router: Router){}

 
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


  deleteData(applicantno:string)
  {
    if(confirm('Are you sure want to delete record'))
    {
      this.ms.deleteApplicant(applicantno).subscribe();
      alert('Record Delete Successfully !')
      
      
    }
    else
    {
      alert('Record Not Deleted Successfully !')
      this.ms.getloanApplicant();
    }
    
window.location.reload();
  }


  closeModal()
  {
    this.showModal=false;
    location.reload();
  }

  edit(c:CustomerApplicationForm)
  {
    let s:string =encodeURIComponent(JSON.stringify(c))
      this.router.navigateByUrl('/user-dashboard/CRM/edit/'+ s)
  }
}
