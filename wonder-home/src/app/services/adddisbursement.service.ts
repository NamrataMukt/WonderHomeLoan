import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Sanction } from '../model/sanction';

@Injectable({
  providedIn: 'root'
})
export class AdddisbursementService {

  constructor(private http:HttpClient) { }

  savedata(s:Sanction)
  {
    return this.http.post('http://localhost:9090/saveData',s)

  }
  getData()
  {
    return this.http.get('http://localhost:9090/getalldisburmentdeatails')
  }

}
