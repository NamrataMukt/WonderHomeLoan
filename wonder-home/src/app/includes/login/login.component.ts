import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent  implements OnInit
{
  constructor(private fb:FormBuilder ,private router:Router){}
  loginform:FormGroup;

  ngOnInit(): void 
  {
    this.loginform=this.fb.group(
      {
        username:[],
        password:[]
      }
    )
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
    else
    {
      alert('Enter valid authentication details...!')
    }
  }
 
}
