import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EmployeeForm } from '../model/employee-form';

@Injectable({
  providedIn: 'root',
})
export class AddemployeeService {
  constructor(private http: HttpClient) {}

  saveEmployee(emp: EmployeeForm) {
    return this.http.post('http://localhost:9090/saveEmp', emp);
  }

  getAllEmployees() {
    return this.http.get('http://localhost:9090/getEmp');
  }
  deleteEmployeeDetails(empId: number) {
    return this.http.delete('http://localhost:9090/delete/' + empId);
  }
  updateEmployee(emp: EmployeeForm) {
    return this.http.put('http://localhost:9090/update/' + emp.empId, emp);
  }
}
