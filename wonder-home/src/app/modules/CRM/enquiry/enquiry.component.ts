import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EnquiryService } from '../../../services/enquiry.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-enquiry',
  templateUrl: './enquiry.component.html',
  styleUrl: './enquiry.component.css'
})
export class EnquiryComponent {

  enquiryForm: FormGroup;
  applicantData:any;
    constructor(private fb: FormBuilder, private enquiryService: EnquiryService,private router: Router,private route: ActivatedRoute) { }

    ngOnInit(): void {
        this.createForm();
        this.applicantData = history.state.applicantData; // Retrieve the data passed from the previous component
    if (this.applicantData) {
      this.populateForm(this.applicantData); // Populate the form with the received data
    }
  
    }
    

    createForm() {
        this.enquiryForm = this.fb.group({
          customerId:[],
          customerName: [],
            age: [''],
            customerEmailId: [''],
            customerMobileNumber: [''],
            pancardNumber: [''],
            city: [''],
            pincode: [''],
            date:[''],
            enquiry:['']

        
            
        });
    }

    submitEnquiry() {
        
            this.enquiryService.submitEnquiry(this.enquiryForm.value).subscribe()
            console.log(this.enquiryForm.value)  
    
    }
    populateForm(data: any) {
      this.enquiryForm.patchValue({
        applicantName: data.applicantName,
        age: data.age,
        email: data.email,
        mobileNumber: data.mobileNumber,
        pancardNumber: data.pancardNumber,
        city: data.city,
        pincode: data.pincode,
        date: data.date,
        enquiry: data.enquiry
      });

    }
    
    onUpdate() {
      if (this.applicantData && this.applicantData.applicantId) {
        const applicantId = this.applicantData.applicantId;
        this.enquiryService.updateEnquiry(applicantId, this.enquiryForm.value).subscribe(() => {
          alert('User details updated successfully');
          this.router.navigate(['/user-dashboard/CRM/view_applicants']);
         
          console.log(this.enquiryForm.value);
        });
      } else {
        console.error('Applicant data or ID not available');
        console.log(this.enquiryForm)
      }
    }

}
