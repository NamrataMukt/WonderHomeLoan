import { Component, OnInit } from '@angular/core';
import { AddemployeeService } from '../../../services/addemployee.service';
import { EmployeeForm } from '../../../model/employee-form';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrl: './view-employee.component.css',
})
export class ViewEmployeeComponent implements OnInit {
  constructor(private as: AddemployeeService, private router: Router) {}

  employees: EmployeeForm[];
  ngOnInit(): void {
    this.as.getAllEmployees().subscribe((data: EmployeeForm[]) => {
      this.employees = data;
    });
  }
  onDelete(empId: number) {
    this.as.deleteEmployeeDetails(empId).subscribe();
    window.location.reload();
  }
  // onEdit(emp: any): void {
  //   console.log(emp);
  //   this.router.navigate(['user-dashboard/admin/add-employee'], {
  //     state: { employeeData: emp },
  //   });
  // }

  onEdit(employees: EmployeeForm) {
    console.log(employees);
    let data: string = JSON.stringify(employees);
    this.router.navigateByUrl('user-dashboard/Admin/edit/' + data);
  }
}
