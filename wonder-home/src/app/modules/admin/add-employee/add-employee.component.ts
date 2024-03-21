import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AddemployeeService } from '../../../services/addemployee.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrl: './add-employee.component.css'
})
export class AddEmployeeComponent implements OnInit {

  employeeForm:FormGroup;

  constructor(private fb:FormBuilder,private as:AddemployeeService){ }

  ngOnInit(): void {

    this.employeeForm=this.fb.group(
      {
        empId:[],
        empName:[],
        empUserName:[],
        empUserPassword:[],
        email:[],
        mobileNumber:[],
        designation:[],
        userType:[]
        
       
      }
    )
   
  }

  

  onSubmit(){
    console.log(this.employeeForm.value);
    this.as.saveEmployee(this.employeeForm.value).subscribe();
    this.employeeForm.reset();
  }


}




 