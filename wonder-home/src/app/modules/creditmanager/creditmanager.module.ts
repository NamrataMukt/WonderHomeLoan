import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreditmanagerRoutingModule } from './creditmanager-routing.module';

import { VerifiedapplicationsComponent } from './verifiedapplications/verifiedapplications.component';
import { ApprovedapplicationsComponent } from './approvedapplications/approvedapplications.component';
import { CreditprocedureComponent } from './creditprocedure/creditprocedure.component';


@NgModule({
  declarations: [
    
    VerifiedapplicationsComponent,
    ApprovedapplicationsComponent,
    CreditprocedureComponent
  ],
  imports: [
    CommonModule,
    CreditmanagerRoutingModule
  ]
})
export class CreditmanagerModule { }
