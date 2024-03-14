import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApplicantDetails } from '../model/applicant-details';

@Injectable({
  providedIn: 'root'
})
export class EnquiryService {

  constructor(private http:HttpClient) { }

  getEnquiry(){
    return this.http.get('http://localhost:9090/view_Enquiry')
  }
}
