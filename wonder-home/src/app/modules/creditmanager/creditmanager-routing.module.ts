import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { VerifiedapplicationsComponent } from './verifiedapplications/verifiedapplications.component';

import { CreditprocedureComponent } from './creditprocedure/creditprocedure.component';

import { SacnctionapplicationComponent } from './sacnctionapplication/sacnctionapplication.component';
import { ViewSanctionapplicationComponent } from './view-sanctionapplication/view-sanctionapplication.component';


const routes: Routes = [

{
  path:'verifiedapplications',component:VerifiedapplicationsComponent
}
,
{
  path:'sanctionapplications',component:SacnctionapplicationComponent
}
,
{
  path:'view-sanction',component:ViewSanctionapplicationComponent
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
