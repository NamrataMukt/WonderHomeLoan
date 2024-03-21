import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeFormComponent } from './employee-form/employee-form.component';

<<<<<<< HEAD
const routes: Routes = [
  { path: 'view_Employee', component: EmployeeFormComponent },
=======
import { ViewEmployeeComponent } from './view-employee/view-employee.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';

const routes: Routes = [

  {
    path:'add_employee',component:AddEmployeeComponent
  },
  {
    path:'view_employee',component:ViewEmployeeComponent
  }
 
>>>>>>> df2ddd51b84c4f802da94a373c9070ffefeb1b80
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
