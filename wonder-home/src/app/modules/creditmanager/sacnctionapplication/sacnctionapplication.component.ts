import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SanctiondetalisService } from '../../../services/sanctiondetalis.service';

@Component({
  selector: 'app-sacnctionapplication',
  templateUrl: './sacnctionapplication.component.html',
  styleUrl: './sacnctionapplication.component.css'
})
export class SacnctionapplicationComponent implements OnInit {
  constructor(private fb: FormBuilder,private sd:SanctiondetalisService) {}

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
  }
 onSubmit() {
    console.log(this.SanctionForm.value);
    this.sd.saveSanctionDetails(this.SanctionForm.value).subscribe();
    this.SanctionForm.reset();
  }
}