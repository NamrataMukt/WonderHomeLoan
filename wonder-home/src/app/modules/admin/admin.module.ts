import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';

import { ViewEmployeeComponent } from './view-employee/view-employee.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AddEmployeeComponent } from './add-employee/add-employee.component';

@NgModule({
  declarations: [AddEmployeeComponent, ViewEmployeeComponent],
  imports: [CommonModule, AdminRoutingModule, ReactiveFormsModule],
})
export class AdminModule {}
