import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MultistepService } from '../../../services/multistep.service';
import { CustomerApplicationForm } from '../../../model/customer-application-form';
import { Sanction } from '../../../model/sanction';
import { SanctiondetalisService } from '../../../services/sanctiondetalis.service';
import { AdddisbursementService } from '../../../services/adddisbursement.service';

@Component({
  selector: 'app-loan-disbursement',
  templateUrl: './loan-disbursement.component.html',
  styleUrl: './loan-disbursement.component.css',
})
export class LoanDisbursementComponent implements OnInit {
  cs: any;
  
  constructor(private fb: FormBuilder,
    private activeRoute:ActivatedRoute,
    private ss:SanctiondetalisService,
    private ls:AdddisbursementService) {}

  loanDisbursementForm: FormGroup;

  ngOnInit(): void {
    this.loanDisbursementForm = this.fb.group({
      aggrementId: [],
      sanctionId:[],
      loanNumber: [],
      applicantName:[],
      aggrementDate: [],
      amountPayType: [],
      totalAmount: [],
      bankName: [],
      accountNumber: [],
      ifscCode: [],
      transferAmount: [],
      paymentStatus: [],
      amountPayDate: [],
    });
    this.patchValue();
  }

  loanNumber:Number;

  onSubmit() 
  {
    this.ls.savedata(this.loanDisbursementForm.value).subscribe();
    alert('save');
    this.loanDisbursementForm.reset();
  }
  patchValue()
  {
    this.activeRoute.paramMap.subscribe
        (param=>{
          let pjson:string=param.get('sid')
          this.ss.finddata(pjson).subscribe(
            (data:Sanction[])=>
            {
              console.log(data)
              this.cs=data;
              console.log(this.cs)
            this.loanDisbursementForm.patchValue({
              
              applicantName:this.cs.applicantName,
              loanNumber:Math.floor(Math.random() * 1000000000),
              sanctionId:this.cs.sanctionId,
      totalAmount: this.cs.loanAmountSanctioned,
            })    
           })
          } ) 
          
}
}