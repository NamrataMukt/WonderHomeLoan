import { Component, OnInit } from '@angular/core';
import { Sanction } from '../../../model/sanction';
import { SanctiondetalisService } from '../../../services/sanctiondetalis.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-sanctionapplication',
  templateUrl: './view-sanctionapplication.component.html',
  styleUrl: './view-sanctionapplication.component.css'
})
export class ViewSanctionapplicationComponent implements OnInit {
  constructor(private sl: SanctiondetalisService, private router: Router) {}

  sanction:Sanction[];
  ngOnInit(): void {
    this.sl.getSanctionList().subscribe((data: Sanction[]) => {
      this.sanction = data;
    });
  }
  Generate(){

  }

}


  

 

