import { Component } from '@angular/core';
import { Ledger } from '../../../model/ledger';

@Component({
  selector: 'app-view-ledger',
  templateUrl: './view-ledger.component.html',
  styleUrl: './view-ledger.component.css',
})
export class ViewLedgerComponent {
  ledger: Ledger[];
}
