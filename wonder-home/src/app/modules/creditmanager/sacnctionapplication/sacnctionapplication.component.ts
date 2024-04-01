import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SanctiondetalisService } from '../../../services/sanctiondetalis.service';
import { ActivatedRoute } from '@angular/router';
import { CustomerApplicationForm } from '../../../model/customer-application-form';
import { MultistepService } from '../../../services/multistep.service';
import { DatePipe, getLocaleDateFormat } from '@angular/common';

@Component({
  selector: 'app-sacnctionapplication',
  templateUrl: './sacnctionapplication.component.html',
  styleUrl: './sacnctionapplication.component.css'
})
export class SacnctionapplicationComponent implements OnInit {
  constructor(private fb: FormBuilder,private sd:SanctiondetalisService,
    private activeRoute:ActivatedRoute,
    private ms:MultistepService) {}

  SanctionForm: FormGroup;

  ngOnInit(): void {
    this.SanctionForm = this.fb.group({
     
      sanctionId:[],
      sanctionDate:[],
    applicantName:[],
    contactDetails:[],
    applicantemailid:[],
    tokenamountForHome:[],
    loanAmountSanctioned:[],
    rateOfInterest:[],
    loanTenure:[],
     monthlyEmiAmount:[],
    sanctionstatus:[],
    });

    this.patchValue();
  }
 onSubmit() 
 {
    console.log(this.SanctionForm.value);
    this.sd.saveSanctionDetails(this.SanctionForm.value).subscribe();
    this.SanctionForm.reset();
  }
  
  c:CustomerApplicationForm;
cs:any;
  patchValue()
  {
    this.activeRoute.paramMap.subscribe
        (param=>{
          let pjson:string=param.get('cid')
          this.ms.findbyData(pjson).subscribe(
            (data:CustomerApplicationForm[])=>
            {
              this.cs=data;
            this.SanctionForm.patchValue({
              
              applicantName:this.cs.customerDetails.customerName,
    contactDetails:this.cs.customerDetails.customerMobileNumber,
    applicantemailid:this.cs.customerDetails.customerEmailId,
    tokenamountForHome:this.cs.customerDetails.tokenmoney,
            })
                        
                  
               }
        )
  } ) 
}
}

