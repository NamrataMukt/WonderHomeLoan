import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MultistepService } from '../../../services/multistep.service';
import { CustomerBasicDetails } from '../../../model/customer-basic-details';
import { CustomerAddress } from '../../../model/CustomerAddress';
import { CustomerBankDetails } from '../../../model/customer-bank-details';
import { EmploymentDetails } from '../../../model/employment-details';
import { PreviousLoanDetails } from '../../../model/previous-loan-details';
import { DependantDetails } from '../../../model/dependant-details';
import { GuarantorDetails } from '../../../model/guarantor-details';
import { Mortage } from '../../../model/mortage';
import { BuilderDetails } from '../../../model/builder-details';
import { CustomerDocumentUpload } from '../../../model/customer-document-upload';
import { ActivatedRoute, NavigationStart, Router } from '@angular/router';
import { Cibilscore } from '../../../model/cibilscore';

@Component({
  selector: 'app-addnewloan',
  templateUrl: './addnewloan.component.html',
  styleUrl: './addnewloan.component.css'
})
export class AddnewloanComponent implements OnInit
{
 
  constructor(private fb: FormBuilder,private multistep:MultistepService,private route: ActivatedRoute,private router: Router) {}
  applicantData: any;
  

  step = 1;
  CustomerApplicationForm:FormGroup;
  salaryslip: any;
  gaadhar:any;
  bpanCard:any;
  baadharCard: any;
  propertyproof: any;
  panCard:any;
  aadharCard:any;
  addressProof:any;
  cheque:any;
  photo:any;
  sign:any;
  tax:any;
  statment:any;

  ngOnInit(): void {
    this.CustomerApplicationForm = this.fb.group({
      cutomerDetails: this.fb.group({
        customerId: [''],
        customerName: [''],
        customerMobileNumber: [''],
        customerEmailId: [''],
        adharNumber: [''],
        pancardNumber: [''],
        gender: [''],
        customerDOB: [''],
        age: [''],
        cibilScoreStatus:[''],
        cibilScore: [''],
        tokenmoney:[''],
        loanRequired:['']
      }),

      customerAddress: this.fb.group({
        customerAddressId: [''],
        permenantAddress: this.fb.group({
          permenantId: [''],
          houseNo: [''],
          areaName: [''],
          streetName: [''],
          cityName: [''],
          district: [''],
          state: [''],
          pincode: [''],
        }),
        localAddress: this.fb.group({
          localId: [''],
          houseNo: [''],
          areaName: [''],
          streetName: [''],
          cityName: [''],
          district: [''],
          state: [''],
          pincode: [''],
        }),
      }),
      customerbankDetail:this.fb.group({
        bankdetailsId:[''],
        bankAccountNo:[''],
        bankName:[''],
        bankIFSCCode:[''],
        bankAddress:[''],
        bankConatactNo:['']
      }),
      employmentDetails: this.fb.group({
        professionId: [''],
        companyName: [''],
        salary: [''],
        employeeWorkingPeriod: [''],
        profDesignation: [''],
        salarySlip: [''],
      }),
      previousloandata:this.fb.group({
        previousloanId:[''],
        previousloanAmount:[''],
        paidAmount:[''],
        remainingAmount:[''],
        tenure:[''],
        bankName:[''],
        ifscCode:[''],
        bankAddress:[''],
        
      }),
      applicantDependant: this.fb.group({
        dependantId: [''],
        fatherName: [''],
        motherName: [''],
        maritalStatus: [''],
        numberOfChild: [''],
        familyIncome: [''],
        spouseName: [''],
        noOfDependentMember:[''],
        
      }),
      guarantorDetails: this.fb.group({
        guarantorId: [''],
        guarantorName: [''],
        guarantorDOB: [''],
        guarantorRelationshipWithApplicant: [''],
        guarantorMobileNumber: [''],
        aadhaarcardNumber: [''],
        guarantorCityName: [''],
        guarantorJobDetails: [''],
        guarantorAreaName: [''],
        gadhaar:['']
      }),

      mortage:this.fb.group({
        mortageId:[''],
        propertyValue:[''],
        reraNumber:[''],
        propertyType:[''],
        tenure:[''],
        totalLoanRequired:[''],
        propertyProof:['']
      }),
      builderdetails:this.fb.group({
        builderId:[''],
        builderName:[''],
        builderAdharcard:[''],
        builderPancard:[''],
        builderAddress:[''],
        bankName:[''],
        bankAccno:[''],
        bankIfscCode:[''],
        bpanCard:[''],
        baadharCard:['']
      }),
      documentUpload:this.fb.group({
        aadharCard:[''],
        panCard:[''],
        addressProof:[''],
        bankCheque:[''],
        applicantPhoto:[''],
        applicantSignature:[''],
        incometaxReturn:[''],
        bankStatment:['']
      })
      
    });
    this.router.events.subscribe((val) => {
      if (val instanceof NavigationStart) {
        const state = this.router.getCurrentNavigation()?.extras.state;
        if (state && state['applicantData']) {
          const applicantData = state['applicantData'];
          this.populateForm(this.applicantData);
          console.log('Route State:', this.router.getCurrentNavigation()?.extras.state);
          console.log(applicantData)

        }
      }
    });
  }

  next() {
    this.step++;
  }
  previous() {
    this.step--;
  }
  onSubmit() {
    let applicantJson:string =JSON.stringify(this.CustomerApplicationForm.value)
    console.log(this.CustomerApplicationForm.value)
    const formData:FormData=new FormData();
        formData.append('applicantdata',applicantJson)
        formData.append('salarySlip',this.salaryslip)
        formData.append('propertyProof',this.propertyproof)
        formData.append('Gaadhar',this.gaadhar)
        formData.append('Baadhar',this.baadharCard)
        formData.append('BPan',this.bpanCard)
        formData.append('propertyProof',this.propertyproof)
        formData.append('pan',this.panCard)
        formData.append('aadharCard',this.aadharCard)
        formData.append('addressProof',this.addressProof)
        formData.append('cheque',this.cheque)
        formData.append('photo',this.photo)
        formData.append('sign',this.sign)
        formData.append('tax',this.tax)
        formData.append('statment',this.statment)
     this.multistep.saveloanApplicant(formData).subscribe();

  }

  onselectSalarySlip(event: any) {
    this.salaryslip = event.target.files[0];
  }

  onselectpropertyProof(event:any)
  {
    this.propertyproof=event.target.files[0];
  }
  onselectgaadhar(event: any) {
    this.gaadhar = event.target.files[0];
  }
  onselectbaadharCard(event: any) {
    this.baadharCard = event.target.files[0];
  }
 
  onselectbpanCard(event:any)
  {
    this.bpanCard=event.target.files[0];
  }
  onselectAadharCard(event:any)
  {
    this.aadharCard=event.target.files[0];
  }
  onselectPanCard(event:any)
  {
    this.panCard=event.target.files[0];
  }
  onselectAddressProof(event:any)
  {
    this.addressProof=event.target.files[0];
  }
  onselectCheque(event:any)
  {
    this.cheque=event.target.files[0];
  }
  onselectPhoto(event:any)
  {
    this.photo=event.target.files[0];
  }
  onselectSign(event:any)
  {
    this.sign=event.target.files[0];
  }
  onselectTax(event:any)
  {
    this.tax=event.target.files[0];
  }
  onselectStatment(event:any)
  {
    this.statment=event.target.files[0];
  }


  populateForm(applicantData: any) {
    // Check if applicantData is defined
    if (applicantData !== undefined && applicantData !== null) {
        // Access properties only if applicantData is defined
        this.CustomerApplicationForm.patchValue({
            customerDetails: {
                // Use optional chaining (?.) to safely access properties
                customerName: applicantData.customerName,
                customerAge: applicantData.age,
                customerEmailId: applicantData.customerEmailId,
                customerMobileNumber: applicantData.customerMobileNumber,
                pancardNumber: applicantData.pancardNumber,
                //city: applicantData.city,
               // pincode: applicantData.pincode,
                //date: applicantData.date,
               // enquiry: applicantData.enquiry,  
                cibilScore:applicantData.cibilScore.cibilScore
            }
        });
    } else {
       
        console.error('Applicant data is undefined or null.');
       
    }
}
}
