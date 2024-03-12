import { Component } from '@angular/core';

@Component({
  selector: 'app-loan-applicants',
  templateUrl: './loan-applicants.component.html',
  styleUrl: './loan-applicants.component.css'
})
export class LoanApplicantsComponent {

  applicants: any[] = [];
  showApplicantsTable: boolean = true;

}
