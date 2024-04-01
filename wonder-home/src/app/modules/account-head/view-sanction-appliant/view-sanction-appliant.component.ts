import { Component, OnInit } from '@angular/core';
import { SanctiondetalisService } from '../../../services/sanctiondetalis.service';
import { Router } from '@angular/router';
import { Sanction } from '../../../model/sanction';

@Component({
  selector: 'app-view-sanction-appliant',
  templateUrl: './view-sanction-appliant.component.html',
  styleUrl: './view-sanction-appliant.component.css'
})
export class ViewSanctionAppliantComponent implements OnInit
{
  constructor(private sl: SanctiondetalisService, private router: Router) {}

  sanction:Sanction[];
  ngOnInit(): void {
    this.sl.getSanctionList().subscribe((data: Sanction[]) => {
      this.sanction = data;
    });
  }
  Generate(s:Sanction)
  {
    let sid:string=s.sanctionId;
    this.router.navigateByUrl('/user-dashboard/accounthead/loandisbursment/'+sid)
  }


}
