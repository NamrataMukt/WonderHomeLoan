import { Component, OnInit } from '@angular/core';
import { Usermenu } from '../../model/usermenu';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrl: './user-menu.component.css'
})
export class UserMenuComponent implements OnInit
{
  constructor(private route:Router,private activatedRoute:ActivatedRoute){}
  userOption:Array<any>;
    type:string;

  ngOnInit(): void 
  {
      this.userOption=Usermenu.menus;
      this.type=sessionStorage.getItem('userType');
  }
  
navigateTo(link:string)
{
  //this.activatedRoute.url;
  this.route.navigateByUrl('/user-dashboard/'+this.type+"/"+link)
}

}
