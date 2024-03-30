import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StatusCheck } from '../model/status-check';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StatuscheckService {

  constructor(private http: HttpClient) { }

  savestatusData(applicantno:string,status:string)
  {
    return this.http.post<string>('http://localhost:9090/savestatus/'+applicantno,status)
  }
  getstatus()
  {
    return this.http.get('http://localhost:9090/getAllStatus')
  }

}
