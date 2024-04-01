import { Component, OnInit } from '@angular/core';
import { Ledger } from '../../../model/ledger';
import { AddledgerService } from '../../../services/addledger.service';

@Component({
  selector: 'app-view-ledger',
  templateUrl: './view-ledger.component.html',
  styleUrl: './view-ledger.component.css',
})
export class ViewLedgerComponent implements OnInit
{
  constructor(private ledgers:AddledgerService){}
  ledger: Ledger[];
  ngOnInit(): void 
  {
    this.ledgers.getLedger().subscribe((data:any[])=>{
      this.ledger=data;
    })
  }
  

}
