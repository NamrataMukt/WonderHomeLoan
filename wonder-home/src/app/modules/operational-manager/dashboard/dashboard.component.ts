import { Component } from '@angular/core';
<<<<<<< HEAD

=======
// import { Ussermenus } from '../../../model/';
>>>>>>> ccd6e0be433ced5398c28d36a69e1e207143e621
import { Router } from '@angular/router';
import { Usermenu } from '../../../model/usermenu';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  constructor(private router: Router) { }
  userOptions = Usermenu.menus[0].opm;


  

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
