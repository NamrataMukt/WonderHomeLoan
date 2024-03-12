import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddnewloanComponent } from './addnewloan/addnewloan.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EnquiryComponent } from './enquiry/enquiry.component';
import { CreditManagerRoutingModule } from './CreditManager-routing.module';


@NgModule({
  declarations: [
    AddnewloanComponent,
    EnquiryComponent
  ],
  imports: [
    CommonModule,
    CreditManagerRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CreditManagerModule { }
