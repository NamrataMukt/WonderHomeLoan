import { Component } from '@angular/core';
import { EnquiryService } from '../../../services/enquiry.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CibilscoreService } from '../../../services/cibilscore.service';

@Component({
  selector: 'app-loan-applicants',
  templateUrl: './loan-applicants.component.html',
  styleUrl: './loan-applicants.component.css'
})
export class LoanApplicantsComponent {

  constructor(private fb:FormBuilder,private ps:EnquiryService,private cs:CibilscoreService){}

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

}
