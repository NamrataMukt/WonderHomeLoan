import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ViewEmployeeComponent } from './view-employee/view-employee.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';

const routes: Routes = [

  {
    path:'add_employee',component:AddEmployeeComponent
  },
  {
    path:'view_employee',component:ViewEmployeeComponent
  }
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
