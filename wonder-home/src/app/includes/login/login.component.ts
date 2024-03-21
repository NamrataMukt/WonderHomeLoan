import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AddemployeeService } from '../../services/addemployee.service';
import { EmployeeForm } from '../../model/employee-form';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent  implements OnInit
{
  
  constructor(private fb:FormBuilder ,private router:Router,private as:AddemployeeService){}

 
  
  loginform:FormGroup;

  ngOnInit(): void 
  {
   
    this.loginform=this.fb.group(
      {
        username:[],
        password:[],
      
      }
      )
    // this.loadUserType();
  }
  

  onSubmit()
  {
    let un:string =this.loginform.controls['username'].value;
    let pass:string =this.loginform.controls['password'].value;
   
    
    
    if (un === 'admin' && pass === 'admin123') 
    {
      this.router.navigateByUrl('user-dashboard/Admin');
      sessionStorage.setItem('userType', 'Admin');
    }
    else if(un ==='crm'&& pass ==='crm111')
    {
        this.router.navigateByUrl('user-dashboard/CRM')
        sessionStorage.setItem('userType','CRM')
    }
    else if(un ==='ah'&& pass ==='ah123')
    {
        this.router.navigateByUrl('user-dashboard/accounthead')
        sessionStorage.setItem('userType','accounthead')
    }
    else if(un==='opm' && pass==='opm123')
    {
      alert('User is an opm..!')
      sessionStorage.setItem('userType','opm')
      this.router.navigateByUrl('user-dashboard/opm')
    }
    else
    {
      alert('Enter valid authentication details...!')
    }
  }
    
// employee:EmployeeForm[];

//   loadUserType():void{

//     this.as.getAllEmployees().subscribe(
//       (data:EmployeeForm[])=>
//         {
//              this.employee=data;
//         }
//         )
    


  }

  
 

