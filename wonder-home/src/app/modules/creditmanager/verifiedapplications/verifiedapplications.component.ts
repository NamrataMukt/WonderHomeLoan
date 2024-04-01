import { Component, OnInit } from '@angular/core';
import { MultistepService } from '../../../services/multistep.service';
import { Router } from '@angular/router';
import { CustomerApplicationForm } from '../../../model/customer-application-form';
import { StatusCheck } from '../../../model/status-check';

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
   status:string='ACCEPTED';
   statuscheck:StatusCheck[];

  ngOnInit(): void 
  {
   this.loadStatusData();
    
  }
  loadStatusData()
  {
    this.ms.getStatus(this.status).subscribe(
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
  sanction(c:CustomerApplicationForm)
  {
    let cid:string=c.applicationNumber;
     this.router.navigateByUrl('/user-dashboard/CreditManager/sanctionform/'+cid);
  }
  
  
}
