import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cibilscore } from '../model/cibilscore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CibilscoreService {

  constructor(private http:HttpClient) { }

  // saveCibilScore(applicantId,cibil:Cibilscore){
  //   return this.http.post('http://localhost:9090/savecibil'+applicantId,cibil)
  // }

  saveCibilScore(applicantId: number, cibilScore: Cibilscore): Observable<any> {
    return this.http.post(`http://localhost:9090/savecibil/${applicantId}`, cibilScore);
  }
}
