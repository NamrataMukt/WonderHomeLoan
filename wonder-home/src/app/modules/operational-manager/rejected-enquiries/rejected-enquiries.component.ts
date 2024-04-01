import { Component } from '@angular/core';
import { EnquiryService } from '../../../services/enquiry.service';

@Component({
  selector: 'app-rejected-enquiries',
  templateUrl: './rejected-enquiries.component.html',
  styleUrl: './rejected-enquiries.component.css'
})
export class RejectedEnquiriesComponent 
{

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
