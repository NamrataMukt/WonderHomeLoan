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
        console.log(this.applicantData)
    if (this.applicantData) {
      this.populateForm(this.applicantData); // Populate the form with the received data
      console.log(this.applicantData)
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

    isUpdateMode: boolean = false;

    submitEnquiry() {
      
        
            this.enquiryService.submitEnquiry(this.enquiryForm.value).subscribe()
            alert("Enquiry submitted successfully.")
            this.enquiryForm.reset();
    
    }
    populateForm(data: any) {
      this.enquiryForm.patchValue({
        customerName: data.customerName,
        age: data.age,
        customerEmailId: data.customerEmailId,
        customerMobileNumber: data.customerMobileNumber,
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
