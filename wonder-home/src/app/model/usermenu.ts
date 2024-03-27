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
        { label: 'Add Ledger', link: 'ledger' },
        { label: 'view ledger', link: 'viewledger' },
        { label: 'Add Loan Disbursement', link: 'loandisbursement' },
        { label: 'Defaulter List', link: 'defaulter' },
        { label: 'view loan disbursement', link: 'viewLoanDisbursement' },
      ],
      opm: [
        { label: 'Dashboard', link: 'dashboard' },
        { label: 'Enquiry-Applications', link: 'applicants' },
        { label: 'Loan-Applications', link: 'approved-customer' }
        
      ],
      CreditManager:[

        {label:'Verified-Applications',link:'verifiedapplications'},
        {label:'Sanction-Applications',link:'sanctionapplications'},
        {label:'View Sanction List',link:'view-sanction'},
        {label:'Credit-Procedure',link:'creditprocedure'},
        
    ],
    },
  ];
}


// opm:[
//     {label:'Dashboard',link:'dashboard'},
//     {label:'Loan-Enquiries' , link:'applicants'},
//     {label:'Loan-Applications' , link:'approved-customer'},
//     {label:'verification required' ,link:'verification-required'}