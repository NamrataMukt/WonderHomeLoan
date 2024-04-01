export class Usermenu {
  public static menus: Array<any> = [
    {
      Admin: [
        //0 index
         { label: 'Add New resourse', link: 'add_employee' },
        { label: 'View Resources', link: 'view_employee' },
      ],
      CRM: [
        { label: 'Enquiry', link: 'enquiry' },
        { label: 'View Applicants', link: 'view_applicants' },
        { label: 'New Loan Application', link: 'addnewloan' },
        { label: 'View Apply Loan Applicants', link: 'viewloanapplied' },
        { label: 'Rejected Applicants', link: 'rejectedapplicants' },
        { label: 'My Profile', link: 'crmprofile' }
       
      ],

      accounthead: [
        {label:'View Sanction Applicant',link:'viewsanction'},
        { label: 'Add Loan Disbursement', link: 'loandisbursment' },
        { label: 'view loan disbursement', link: 'viewLoanDisbursement' },
        { label: 'Add Ledger', link: 'ledger' },
        { label: 'view ledger', link: 'viewledger' },
      
      ],
      opm: [
        { label: 'Dashboard', link: 'dashboard' },
        { label: 'Enquiry-Applications', link: 'applicants' },
        {label:'verified-enquiries',link:'verified-enquiries'},
        {label:'rejected-enquiries',link:'rejected-enquiries'},
        { label: 'View Loan-Applications', link: 'viewloanapplied'},
          ],
      CreditManager:[

        {label:'Verified-Applications',link:'verifiedapplications'},
        {label:'Sanction-Applications',link:'sanctionform'},
        {label:'View Sanction List',link:'view-sanction'}
       
        
    ],
    },
  ];
}
