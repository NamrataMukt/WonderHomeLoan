<<<<<<< HEAD
// export class Usermenu {
//   public static menus: Array<any> = [
//     {
//       Admin: [
//         //0 index
//         { label: 'Add Employee', link: 'view_Employee' },
//         { label: 'App Statastics', link: 'statastics' },
//         { label: 'Add New resourse', link: 'add_employee' },
//         { label: 'update resourse', link: 'update_employee' },
//       ],
//       CRM: [
//         { label: 'Enquiry', link: 'enquiry' },
//         { label: 'New Loan Application', link: 'addnewloan' },
//         { label: 'My Profile', link: 'crmprofile' },
//         { label: 'Loan Applied', link: 'loanapplied' },
//       ],
//       accounthead: [
//         { label: 'Add Ledger', link: 'ledger' },
//         { label: 'view ledger', link: 'viewledger' },
//         { label: 'Add Loan Disbursement', link: 'loandisbursement' },
//         { label: 'Defaulter List', link: 'defaulter' },
//         { label: 'view loan disbursement', link: 'viewLoanDisbursement' },
//       ],
//     },
//   ];
export class Usermenu {
  public static menus: Array<any> = [
    {
      Admin: [
        //0 index
        { label: 'App Statastics', link: 'statastics' },
        { label: 'Add New resourse', link: 'add_employee' },
        { label: 'update resourse', link: 'update_employee' },
      ],
      CRM: [
        { label: 'Enquiry', link: 'enquiry' },
        { label: 'New Loan Application', link: 'addnewloan' },
        { label: 'View_Applicants', link: 'view_applicants' },
        { label: 'My Profile', link: 'crmprofile' },
        { label: 'Loan Applied', link: 'loanapplied' },
      ],
=======
export class Usermenu 
{
    public static menus:Array<any>=[
         
        {
            Admin:[
                //0 index
                
                {label:'Add New resourse' ,link:'add_employee'},
                {label:'View Resources' , link:'view_employee'}   
            ],
            CRM:[
                {label:'Enquiry',link:'enquiry'},
                {label:'New Loan Application',link:'addnewloan'},
                {label:'View_Applicants' , link:'view_applicants'},
                {label:'My Profile',link:'crmprofile'},
                {label:'Loan Applied',link:'loanapplied'}
            ],
>>>>>>> df2ddd51b84c4f802da94a373c9070ffefeb1b80

      CreditManager: [{ label: 'Dashboard', link: 'c-dash' }],
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
    },
  ];
}
