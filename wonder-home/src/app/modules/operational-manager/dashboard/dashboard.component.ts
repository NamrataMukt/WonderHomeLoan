import { Component } from '@angular/core';

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

  // ngOnInit(): void {
  //   // Initialize userOptions array with shortcut options for the menu
  //   this.userOptions = [
  //     { label: 'Applicants', link: 'applicants' },
  //     { label: 'Approved Customers', link: 'approved-customer' },
  //     { label: 'Verification Required', link: 'verification-required' }
  //   ];
  // }

  

  navigateToMenuOption(option: string): void {
    switch(option) {
      case 'applicants':
        this.router.navigateByUrl('/userdash/opm/applicants');
        console.log(option)
        break;
      case 'approved-customer':
        this.router.navigate(['/userdash/opm/approved-customer']);
        break;
      case 'verification-required':
        this.router.navigate(['/userdash/opm/verification-required']);
        break;
      default:
        // Handle default case
        break;
    }
  }

}
