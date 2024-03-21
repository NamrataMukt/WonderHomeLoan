import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CustomerApplicationForm } from '../model/customer-application-form';

@Injectable({
  providedIn: 'root'
})
export class MultistepService {

  constructor(private http:HttpClient) { }
  saveloanApplicant(appform:FormData)
  {
   return this.http.post('http://localhost:9090/saveApplicant',appform) 
  }
  getloanApplicant()
  {
    return this.http.get('http://localhost:9090/getApplicant')
  }

  getbasicData()
  {
      return this.http.get('http://localhost:9090/getcustomerAllBasicDetails')
  }
}
