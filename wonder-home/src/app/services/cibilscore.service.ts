import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cibilscore } from '../model/cibilscore';

@Injectable({
  providedIn: 'root'
})
export class CibilscoreService {

  constructor(private http:HttpClient) { }

  saveCibilScore(cibil:Cibilscore){
    return this.http.post('http://localhost:9099/save_cibilscore',cibil)
  }
}
