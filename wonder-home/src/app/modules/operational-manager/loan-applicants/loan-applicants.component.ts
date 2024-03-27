import { ChangeDetectorRef, Component } from '@angular/core';
import { EnquiryService } from '../../../services/enquiry.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CibilscoreService } from '../../../services/cibilscore.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-loan-applicants',
  templateUrl: './loan-applicants.component.html',
  styleUrl: './loan-applicants.component.css'
})
export class LoanApplicantsComponent {

  constructor(private fb:FormBuilder,private ps:EnquiryService,private cs:CibilscoreService,private cdr: ChangeDetectorRef,private router: Router,
    private http: HttpClient){}

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

  generateCibilScore(applicant: any): void {
    // Generate a random CIBIL score
    const cibilScore = Math.floor(Math.random() * (900 - 300 + 1)) + 300;

    // Update the applicant object with the generated CIBIL score
    applicant.cibilScore = { cibilScore };

    // Save the updated applicant object to the database
    this.cs.saveCibilScore(applicant.customerId,applicant.cibilScore).subscribe(
        response => {
            console.log('CIBIL score generated and saved successfully:', response);
        },
        error => {
            console.error('Error saving CIBIL score:', error);
        }
    );
}

approveEnquiry(applicant: any): void {
  if (applicant.cibilScore && applicant.cibilScore.cibilScore > 700) {
    this.updateEnquiryStatus(applicant, 'Approved');
  }
}

rejectEnquiry(applicant: any): void {
  this.updateEnquiryStatus(applicant, 'Rejected');
}

private updateEnquiryStatus(applicant: any, status: string): void {
  this.http.put<any>(`http://localhost:9090/updateEnquiryStatus/${applicant.customerId}`, { status })
    .subscribe(
      response => {
        console.log('Enquiry status updated successfully:', response);
        applicant.status = status;
        applicant.approved = status === 'Approved';
        applicant.rejected = status === 'Rejected';
      },
      error => {
        console.error('Error updating enquiry status:', error);
      }
    );

  alert(`Enquiry has been ${status.toLowerCase()}.`);
}
}
