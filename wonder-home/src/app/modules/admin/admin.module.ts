import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { EmployeeFormComponent } from './employee-form/employee-form.component';

import { ViewEmployeeComponent } from './view-employee/view-employee.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AddEmployeeComponent } from './add-employee/add-employee.component';


@NgModule({
  declarations: [
<<<<<<< HEAD
    EmployeeFormComponent
=======
    AddEmployeeComponent,
    ViewEmployeeComponent
>>>>>>> df2ddd51b84c4f802da94a373c9070ffefeb1b80
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
