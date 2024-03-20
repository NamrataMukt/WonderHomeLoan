import { Component } from '@angular/core';
import { EnquiryService } from '../../../services/enquiry.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CibilscoreService } from '../../../services/cibilscore.service';
import { ApplicantDetails } from '../../../model/applicant-details';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-applicants',
  templateUrl: './view-applicants.component.html',
  styleUrl: './view-applicants.component.css'
})
export class viewApplicantsComponent {

  constructor(private fb:FormBuilder,private ps:EnquiryService,private cs:CibilscoreService,private router: Router){console.log(this.router.config);}

  applicants: any[] = [];
  showApplicantsTable: boolean = true;

  ngOnInit(): void {
    this.getApplicant(); 
  }
  
  getApplicant(): void {
    this.ps.getEnquiry().subscribe((data: any[]) => {
      this.applicants = data; 
    });
  }

  customers: ApplicantDetails[] = []; // Assuming you have an array of Applicant objects
  selectedApplicants: ApplicantDetails[] = [];

  

  editApplicant(applicant: any) {
    this.router.navigate(['/user-dashboard/CRM/enquiry'], { state: { applicantData: applicant } });
  }

  deleteApplicant(applicant: ApplicantDetails): void {
    // Implement delete logic here
    console.log('Delete applicant:', applicant);
  }

  applyForLoan(): void {
    this.router.navigate(['user-dashboard/CRM/addnewloan'], { queryParams: { applicantData: JSON.stringify(this.applicants) } });
  }
  

  
}
