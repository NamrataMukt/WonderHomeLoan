import { Component } from '@angular/core';
import { EnquiryService } from '../../../services/enquiry.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CibilscoreService } from '../../../services/cibilscore.service';
import { ApplicantDetails } from '../../../model/applicant-details';
import { Router } from '@angular/router';
import { Cibilscore } from '../../../model/cibilscore';

@Component({
  selector: 'app-view-applicants',
  templateUrl: './view-applicants.component.html',
  styleUrl: './view-applicants.component.css',
})
export class viewApplicantsComponent {
  constructor(
    private fb: FormBuilder,
    private ps: EnquiryService,
    private cs: CibilscoreService,
    private router: Router
  ) {
    console.log(this.router.config);
  }

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
    this.router.navigate(['/user-dashboard/CRM/enquiry'], {
      state: { applicantData: applicant },
    });
  }

  deleteApplicant(customerId: number): void {
    if (confirm('Are you sure you want to delete this applicant?')) {
      this.ps.deleteEnquiry(customerId).subscribe()
          alert('Applicant deleted successfully.');
          this.getApplicant();
      }
  }
  applyForLoan(applicant: any){
    console.log('Applicant Data:', applicant);
    this.router.navigate(['/user-dashboard/CRM/addnewloan'], { state: { applicantData: applicant } });
    }

  loadCibilScores(): void {
    this.applicants.forEach((applicant) => {
      if (applicant.customerId) {
        this.cs.getCibilScoreByApplicantId(applicant.customerId).subscribe(
          (cibilScore: Cibilscore) => {
            applicant.cibilScore = cibilScore;
          },
          (error) => {
            console.error(
              `Error fetching CIBIL score for applicant ${applicant.customerId}:`,
              error
            );
          }
        );
      }
    });
  }
}
