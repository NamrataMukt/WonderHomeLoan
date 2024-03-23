import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ledger } from '../model/ledger';

@Injectable({
  providedIn: 'root'
})
export class AddledgerService {

  constructor(private http: HttpClient) {}

  saveLedger(ledger: Ledger) {
    return this.http.post('http://localhost:9090/createLedger',ledger);
  }
}
