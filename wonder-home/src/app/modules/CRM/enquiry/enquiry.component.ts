import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EnquiryService } from '../../../services/enquiry.service';

@Component({
  selector: 'app-enquiry',
  templateUrl: './enquiry.component.html',
  styleUrl: './enquiry.component.css'
})
export class EnquiryComponent {

  enquiryForm: FormGroup;

    constructor(private fb: FormBuilder, private enquiryService: EnquiryService) { }

    ngOnInit(): void {
        this.createForm();
    }

    createForm() {
        this.enquiryForm = this.fb.group({
          applicantName: [],
            age: [''],
            email: [''],
            mobileNumber: [''],
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


}
