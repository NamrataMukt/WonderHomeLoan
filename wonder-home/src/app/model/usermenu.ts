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
        { label: 'New Loan Application', link: 'addnewloan' },
        { label: 'View_Applicants', link: 'view_applicants' },
        { label: 'My Profile', link: 'crmprofile' },
        { label: 'Loan Applied', link: 'loanapplied' },
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
        { label: 'applicants', link: 'applicants' },
        { label: 'approved-customer', link: 'approved-customer' },
        { label: 'verification required', link: 'verification-required' },
      ],
      CreditManager:[

        {label:'Verified-Applications',link:'verifiedapplications'},
        {label:'Approved-Applications',link:'approvedapplications'},
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