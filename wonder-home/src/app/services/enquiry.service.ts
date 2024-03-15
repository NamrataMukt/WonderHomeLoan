import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApplicantDetails } from '../model/applicant-details';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EnquiryService {

  constructor(private http:HttpClient) { }
  

  getEnquiry(){
    return this.http.get('http://localhost:9090/view_Enquiry')
  }

  submitEnquiry(applicant:ApplicantDetails){
    return this.http.post('http://localhost:9090/Customers',applicant)
  }

  updateEnquiry(applicantId,updateenquiry:ApplicantDetails){
    return this.http.put("http://localhost:9090/updateEnquiry/"+applicantId,updateenquiry)
  }
  

  
}
