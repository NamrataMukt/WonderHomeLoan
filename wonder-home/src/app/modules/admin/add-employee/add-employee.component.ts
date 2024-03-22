import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AddemployeeService } from '../../../services/addemployee.service';
import { ActivatedRoute } from '@angular/router';
import { EmployeeForm } from '../../../model/employee-form';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrl: './add-employee.component.css',
})
export class AddEmployeeComponent implements OnInit {
  employeeForm: FormGroup;
  employeeData: any;

  constructor(
    private fb: FormBuilder,
    private as: AddemployeeService,
    private ar: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.employeeForm = this.fb.group({
      empId: [],
      empName: [],
      empUserName: [],
      empUserPassword: [],
      email: [],
      mobileNumber: [],
      designation: [],
      userType: [],
    });

    this.patchValue();
  }
  patchValue() {
    this.ar.paramMap.subscribe((param) => {
      let pjson: string = param.get('data');
      let p: EmployeeForm = JSON.parse(pjson);
      this.employeeForm.patchValue(p);
    });
  }
  onSubmit() {
    console.log(this.employeeForm.value);
    this.as.saveEmployee(this.employeeForm.value).subscribe();
    this.employeeForm.reset();
  }

  updateData() {
    alert('updated');
    this.as.updateEmployee(this.employeeForm.value).subscribe();
  }
}
