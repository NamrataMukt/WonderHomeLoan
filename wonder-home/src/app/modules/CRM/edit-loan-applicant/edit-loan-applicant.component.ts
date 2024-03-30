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
  applicantno:string;
  data:any;
  salaryslip:any;
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

 applicationForm:FormGroup;
  cs: any;
  slip: any;
  
  
  constructor(private fb:FormBuilder,private ms:MultistepService,
    private activeRoute:ActivatedRoute)
    {
      this.applicationForm = this.fb.group({
        customerDetails: this.fb.group({
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
         salaryslip: [''],
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
        
    }

    step=1;
 
  
  ngOnInit(): void
   {
    this.editdata();
  }

 
editdata()
{

  this.activeRoute.paramMap.subscribe
  (param=>{
    let pjson:string=param.get('cid')

  this.ms.findbyData(pjson).subscribe(
    (data:CustomerApplicationForm[])=>
    {
      this.applicationForm.patchValue(data);
      this.cs=data;
      this.applicantno=this.cs.applicationNumber;
      this.baadharCard='data:image/png;base64,'+this.cs.builderdetails.baadharCard
      this.bpanCard='data:image/png;base64,'+this.cs.builderdetails.bpanCard
        this.gaadhar='data:image/png;base64,'+this.cs.guarantorDetails.gadhaar
      this.slip='data:image/png;base64,'+this.cs.employmentDetails.salaryslip
        this.propertyproof='data:image/png;base64,'+this.cs.mortage.propertyProof
        this.aadharCard='data:image/png;base64,'+this.cs.documentUpload.aadharCard
        this.panCard='data:image/png;base64,'+this.cs.documentUpload.panCard
        this.photo='data:image/png;base64,'+this.cs.documentUpload.applicantPhoto
        this.sign='data:image/png;base64,'+this.cs.documentUpload.applicantSignature
        this.tax='data:image/png;base64,'+this.cs.documentUpload.incometaxReturn
        this.statment='data:image/png;base64,'+this.cs.documentUpload.bankStatment
        this.cheque='data:image/png;base64,'+this.cs.documentUpload.bankCheque
        this.addressProof='data:image/png;base64,'+this.cs.documentUpload.addressProof
       
      })
  }
  )

}


onUpdate()
{
  let applicantJson:string =JSON.stringify(this.applicationForm.value)
    console.log(this.applicationForm.value)
    if(this.applicationForm.value!=null)
    {
    const formData:FormData=new FormData();
        formData.append('applicantdata',applicantJson);
        formData.append('slip',this.salaryslip);
        formData.append('propertyProof',this.propertyproof);
        // formData.append('Gaadhar',this.gaadhar)
        // formData.append('Baadhar',this.baadharCard)
        // formData.append('BPan',this.bpanCard)
        
        // formData.append('pan',this.panCard)
        // formData.append('aadharCard',this.aadharCard)
        // formData.append('addressProof',this.addressProof)
        // formData.append('cheque',this.cheque)
        // formData.append('photo',this.photo)
        // formData.append('sign',this.sign)
        // formData.append('tax',this.tax)
        // formData.append('statment',this.statment)
        
  this.ms.saveloanApplicant(formData).subscribe();      
//this.ms.updateData(formData).subscribe();     
    }
}

onselectbaadharCard(e) 
{
  if(e.target.files)
  {
    var reader=new FileReader();
    reader.readAsDataURL(e.target.files[0])
    
    reader.onload=(event:any)=>{
      this.baadharCard = event.target.result;
    }
  
  }
}
onselectsalarySlip(e)
{
  if(e.target.files)
  {
  var reader=new FileReader();
  reader.readAsDataURL(e.target.files[0])
  
  reader.onload=(event:any)=>
  {
  this.slip = event.target.result;
  this.salaryslip=e.target.files[0]; 
  }
  }
  
}

/*onselectpropertyProof(e)
{
  if(e.target.files)
  {
  
  var reader=new FileReader();
  reader.readAsDataURL(e.target.files[0])
  reader.onload=(event:any)=>{
  this.propertyproof=event.target.result;
  this.property
}
}}*/
onselectpropertyProof(event:any)
  {
    this.propertyproof=event.target.files[0];
  }
onselectgaadhar(e)
 {
  if(e.target.files)
  {
  
  var reader=new FileReader();
  reader.readAsDataURL(e.target.files[0])
  reader.onload=(event:any)=>{
  this.gaadhar = event.target.result;
}}
}
onselectbpanCard(e)
{
  if(e.target.files)
  {
  
  var reader=new FileReader();
  reader.readAsDataURL(e.target.files[0])
  reader.onload=(event:any)=>{
  this.bpanCard=event.target.result;
}}
}
onselectAadharCard(e)
{
  if(e.target.files)
  {
  
  var reader=new FileReader();
  reader.readAsDataURL(e.target.files[0])
  reader.onload=(event:any)=>{
  this.aadharCard=event.target.result;
}}
}
onselectPanCard(e)
{
  if(e.target.files)
  {
  var reader=new FileReader();
  reader.readAsDataURL(e.target.files[0])
  reader.onload=(event:any)=>{
  
  this.panCard=event.target.result;
}}}

onselectAddressProof(e)
{
  if(e.target.files)
  {
  var reader=new FileReader();
  reader.readAsDataURL(e.target.files[0])
  reader.onload=(event:any)=>{
  
  this.addressProof=event.target.result;
}}}

onselectCheque(e)
{
  if(e.target.files)
  {
  
  var reader=new FileReader();
  reader.readAsDataURL(e.target.files[0])
  reader.onload=(event:any)=>{
  this.cheque=event.target.result;
}}}

onselectPhoto(e)
{
  if(e.target.files)
  {
  
  var reader=new FileReader();
  reader.readAsDataURL(e.target.files[0])
  reader.onload=(event:any)=>{
  this.photo=event.target.result;
}}}


onselectSign(e)
{
  if(e.target.files)
  {
  
  var reader=new FileReader();
  reader.readAsDataURL(e.target.files[0])
  reader.onload=(event:any)=>{
  this.sign=event.target.result;
}}}

onselectTax(e)
{
  if(e.target.files)
  {
  
  var reader=new FileReader();
  reader.readAsDataURL(e.target.files[0])
  reader.onload=(event:any)=>{
  this.tax=event.target.result;
}}}

onselectStatment(e)
{
  if(e.target.files)
  {
  
  var reader=new FileReader();
  reader.readAsDataURL(e.target.files[0])
  reader.onload=(event:any)=>{
  this.statment=event.target.result;
}}}



  next()
  {
    this.step++
  }
  previous(){
    this.step--
  }


}
