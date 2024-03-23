import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { VerifiedapplicationsComponent } from './verifiedapplications/verifiedapplications.component';

import { CreditprocedureComponent } from './creditprocedure/creditprocedure.component';
import { ApprovedCustomerComponent } from '../operational-manager/approved-customer/approved-customer.component';
import { ApprovedapplicationsComponent } from './approvedapplications/approvedapplications.component';

const routes: Routes = [

{
  path:'verifiedapplications',component:VerifiedapplicationsComponent
}
,
{
  path:'approvedapplications',component:ApprovedapplicationsComponent
}
,
{
  path:'creditprocedure',component:CreditprocedureComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreditmanagerRoutingModule { }
