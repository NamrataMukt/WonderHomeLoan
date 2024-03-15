export class Usermenu {
  public static menus: Array<any> = [
    {
      Admin: [
        //0 index
        { label: 'Add Employee', link: 'view_Employee' },
        { label: 'App Statastics', link: 'statastics' },
        { label: 'Add New resourse', link: 'add_employee' },
        { label: 'update resourse', link: 'update_employee' },
      ],
      CRM: [
        { label: 'Enquiry', link: 'enquiry' },
        { label: 'New Loan Application', link: 'addnewloan' },
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
    },
  ];
}
