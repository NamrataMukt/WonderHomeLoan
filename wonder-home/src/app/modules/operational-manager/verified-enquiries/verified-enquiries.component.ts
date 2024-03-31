import { Component } from '@angular/core';
import { EnquiryService } from '../../../services/enquiry.service';

@Component({
  selector: 'app-verified-enquiries',
  templateUrl: './verified-enquiries.component.html',
  styleUrl: './verified-enquiries.component.css'
})
export class VerifiedEnquiriesComponent {

  constructor(private ps: EnquiryService){}

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
