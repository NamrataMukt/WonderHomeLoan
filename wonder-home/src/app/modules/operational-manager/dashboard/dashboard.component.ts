import { Component } from '@angular/core';
// import { Ussermenus } from '../../../model/';
import { Router } from '@angular/router';
import { Usermenu } from '../../../model/usermenu';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  constructor(private router: Router) { }
  userOptions = Usermenu.menus[0].opm


  

  navigateToMenuOption(option: string): void {
    switch(option) {
      case 'applicants':
        this.router.navigateByUrl('/user-dashboard/opm/applicants');
        console.log(option)
        break;
      case 'approved-customer':
        this.router.navigate(['/user-dashboard/opm/approved-customer']);
        break;
      case 'verification-required':
        this.router.navigate(['/user-dashboard/opm/verification-required']);
        break;
      default:
        // Handle default case
        break;
    }
  }

}
