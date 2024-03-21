import { Component, OnInit } from '@angular/core';
import { AddemployeeService } from '../../../services/addemployee.service';
import { EmployeeForm } from '../../../model/employee-form';

@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrl: './view-employee.component.css'
})
export class ViewEmployeeComponent implements OnInit {

  constructor(private as:AddemployeeService){}

   employees:EmployeeForm[];
  ngOnInit(): void {
    this.as.getAllEmployees().subscribe(
    (data:EmployeeForm[])=>{
      this.employees=data
     }
      )

}
onDelete(empId:number){
  this.as.deleteEmployeeDetails(empId).subscribe();
  window.location.reload();
}
onEdit(emp:EmployeeForm){
  this.as.updateEmployee(emp).subscribe();
  // window.location.reload();
}
}

