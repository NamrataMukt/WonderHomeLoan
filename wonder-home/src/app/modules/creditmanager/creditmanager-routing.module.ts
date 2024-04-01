import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { VerifiedapplicationsComponent } from './verifiedapplications/verifiedapplications.component';



import { SacnctionapplicationComponent } from './sacnctionapplication/sacnctionapplication.component';
import { ViewSanctionapplicationComponent } from './view-sanctionapplication/view-sanctionapplication.component';


const routes: Routes = [

{
  path:'verifiedapplications',component:VerifiedapplicationsComponent
}
,
{
  path:'sanctionform/:cid',component:SacnctionapplicationComponent
}
,
{
  path:'view-sanction',component:ViewSanctionapplicationComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreditmanagerRoutingModule { }
