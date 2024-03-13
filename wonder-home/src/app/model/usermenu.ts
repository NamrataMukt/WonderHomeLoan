export class Usermenu 
{
    public static menus:Array<any>=[
         
        {
            Admin:[
                //0 index
                {label:'App Statastics' , link:'statastics'},
                {label:'Add New resourse' ,link:'add_employee'},
                {label:'update resourse' , link:'update_employee'}   
            ],
            CRM:[
                {label:'Enquiry',link:'enquiry'},
                {label:'New Loan Application',link:'addnewloan'},
                {label:'My Profile',link:'crmprofile'},
                {label:'Loan Applied',link:'loanapplied'}
            ],
<<<<<<< HEAD
            CreditManager:[
                {label:'Dashboard',link:'c-dash'}
=======
            accounthead:[
                {label:'Ledger',link:'ledger'},
                {label:'Loan Disbursement',link:'loandisbursement'},
                {label:'Defaulter List',link:'defaulter'},
              
>>>>>>> aa72b2790d969d78e40a9145c51dba6fe0d834e7
            ]

        }
    ]
}
