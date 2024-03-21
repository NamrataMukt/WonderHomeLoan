import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './template/homepage/homepage.component';
import { DashboardComponent } from './template/dashboard/dashboard.component';
import { ContactComponent } from './template/contact/contact.component';
import { EmiCalculatorComponent } from './template/emi-calculator/emi-calculator.component';
import { LoginComponent } from './includes/login/login.component';
import { UserdashBoardComponent } from './includes/userdash-board/userdash-board.component';

const routes: Routes = [
{
    path:'',redirectTo:'home',pathMatch:'full'
  },
  {
    path:'home',component:HomepageComponent
  },
  {
  path:'home',component:DashboardComponent,children:[
    
    {
      path:'contact',component:ContactComponent
    },
    {
      path:'emical',component:EmiCalculatorComponent
    }
  ]
  },
  
  {
    path:'user-dashboard',component:UserdashBoardComponent,
    children:[
      {
        path: 'Admin',loadChildren:()=>import('./modules/admin/admin.module').then
        (file => file.AdminModule),
      },
      {
        path:'CRM',loadChildren:()=>import('./modules/CRM/CRM.module').then
        (file=>file.CRMModule)
      },
      {
        path:'accounthead',loadChildren:()=>import('./modules/account-head/account-head.module').then
        (file=>file.AccountHeadModule)
      },
        {
        path:'opm' ,loadChildren:()=>import('./modules/operational-manager/operational-manager.module').then(file=>file.OperationalManagerModule)
      }
    
    ]
  },
  {
    path:'login',component:LoginComponent
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
