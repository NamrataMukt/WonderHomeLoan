import { Component } from '@angular/core';
import { EnquiryService } from '../../../services/enquiry.service';

@Component({
  selector: 'app-verification-required',
  templateUrl: './verification-required.component.html',
  styleUrl: './verification-required.component.css'
})
export class VerificationRequiredComponent {

  constructor(private ps:EnquiryService){}

  applicants: any[] = [];

  ngOnInit(): void {
    this.getApplicant(); 
  }

  getApplicant(): void {
    this.ps.getEnquiry().subscribe((data: any[]) => {
      this.applicants = data; 
    });
  }

}
