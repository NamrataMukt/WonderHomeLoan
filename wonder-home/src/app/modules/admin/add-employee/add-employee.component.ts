import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrl: './add-employee.component.css'
})
export class AddEmployeeComponent implements OnInit {

  employeeForm:FormGroup;

  constructor(private fb:FormBuilder){
     
    this.employeeForm=this.fb.group(
      {
        empId:[],
        empUserName:[],
        empUserPassword:[],
        email:[],
        mobileNumber:[],
        
       
      }
    )

  }

  ngOnInit(): void {
    this.employeeForm
  }

  // onSubmit(){
  //   this.as.addEmployee(this.employeeForm.value).subscribe()
  // }

}




 