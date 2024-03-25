import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MultistepService } from '../../../services/multistep.service';
import { ActivatedRoute } from '@angular/router';
import { CustomerApplicationForm } from '../../../model/customer-application-form';

@Component({
  selector: 'app-edit-loan-applicant',
  templateUrl: './edit-loan-applicant.component.html',
  styleUrl: './edit-loan-applicant.component.css'
})
export class EditLoanApplicantComponent  implements OnInit
{
  constructor(private fb:FormBuilder,private ms:MultistepService,
    private activeRoute:ActivatedRoute){}

    step=1;

    a:CustomerApplicationForm
    applicationForm:FormGroup


  ngOnInit(): void
   {
    this.applicationForm = this.fb.group({
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
   
    this.patchValue()
    
  }
  
  retrievedImage: any;
  base64Data: any;
salaryslip: any;
  
  
  patchValue()
  {
    this.activeRoute.paramMap.subscribe
        (param=>{
          let pjson:string=param.get('s')
          
             this.a =JSON.parse(pjson)
           this.applicationForm.patchValue(this.a)
            /*this.salaryslip = this.a.employmentDetails.salarySlip;
            this.base64Data = this.salaryslip.picByte;
            this.retrievedImage = 'data:image/jpeg;base64,'+ this.base64Data;
            console.log(this.applicationForm.value)*/
           // console.log(this.a)
        })
  }


  next()
  {
    this.step++
  }
  previous(){
    this.step--
  }


}
