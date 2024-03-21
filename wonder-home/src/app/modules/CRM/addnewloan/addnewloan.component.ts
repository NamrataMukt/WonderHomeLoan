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
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-addnewloan',
  templateUrl: './addnewloan.component.html',
  styleUrl: './addnewloan.component.css'
})
export class AddnewloanComponent implements OnInit
{
 
  constructor(private fb: FormBuilder,private multistep:MultistepService,private route: ActivatedRoute) {}


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
    this.route.queryParams.subscribe(params => {
      if (params && params['applicantData']) {
        const applicantData = JSON.parse(params['applicantData']);
        this.populateForm(applicantData);
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
    

    /*let applicantJson:string =JSON.stringify(this.applicantDetails.value)
    console.log(applicantJson)
    let addressJson:string=JSON.stringify(this.addressDetails.value)
      console.log(addressJson)
    let bankJson:string=JSON.stringify(this.BankDetails.value)
      console.log(bankJson)
    let employmentJson:string=JSON.stringify(this.employmentDetails.value)
      console.log(employmentJson)
    let preloanJson:string=JSON.stringify(this.PreviousLoanDetails.value) 
      console.log(preloanJson)
    let dependantJson:string=JSON.stringify(this.dependantDetails.value)  
    console.log(dependantJson)
    let guarantorJson:string=JSON.stringify(this.guarantorDetails.value)
     console.log(guarantorJson)
    let mortageJson:string=JSON.stringify(this.MortageDetails.value) 
    console.log(mortageJson)
    let builderJson:string=JSON.stringify(this.BuilderDetails.value)
    console.log(builderJson)*/

   /* const formData:FormData=new FormData();
        formData.append('applicant',applicantJson)
        formData.append('address',addressJson)
        formData.append('bank',bankJson)
        formData.append('employmentdetails',employmentJson)
        formData.append('salaryslip',this.salaryslip)
        formData.append('preloan',preloanJson)
        formData.append('dependant',dependantJson)
        formData.append('gurantor',guarantorJson)
        formData.append('adhaar',this.Gaadhar)
        formData.append('mortage',mortageJson)
        formData.append('propertyProof',this.propertyproof)
        formData.append('builder',builderJson)
        formData.append('panCard',this.panCard)
        formData.append('aadharCard',this.aadharCard)
        formData.append('addressProof',this.addressProof)
        formData.append('cheque',this.cheque)
        formData.append('photo',this.photo)
        formData.append('sign',this.sign)
        formData.append('tax',this.tax)
        formData.append('statment',this.statment) */

        let applicantJson:string =JSON.stringify(this.CustomerApplicationForm.value)
    console.log(applicantJson)
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
     this.multistep.saveApplicant(formData).subscribe();

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
    // Populate the form controls with the received applicant data
    this.CustomerApplicationForm.patchValue({
      cutomerDetails: {
        customerId: applicantData.customerId,
        customerName: applicantData.customerName,
        customerAge: applicantData.age
        
        // Populate other form fields similarly
      },
      // Populate other form groups and controls
    });
  }

}
