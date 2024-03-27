import { Component } from '@angular/core';
import { EnquiryService } from '../../../services/enquiry.service';

@Component({
  selector: 'app-approved-customer',
  templateUrl: './approved-customer.component.html',
  styleUrl: './approved-customer.component.css'
})
export class ApprovedCustomerComponent {

  

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
