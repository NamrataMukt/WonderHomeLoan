import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Sanction } from '../model/sanction';

@Injectable({
  providedIn: 'root'
})
export class SanctiondetalisService {

 

  constructor(private http: HttpClient) {}


  saveSanctionDetails(sanction: Sanction){
    return this.http.post('http://localhost:9090/savesanctionletter',sanction);
  }

  getSanctionList(){
    return this.http.get('http://localhost:9090/getAllsanctionLetter');
  }
}

