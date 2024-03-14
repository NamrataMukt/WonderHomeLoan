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
                {label:'My Profile',link:'crmprofile'},
                {label:'Loan Applied',link:'loanapplied'}
            ],
            accounthead:[
                {label:'Ledger',link:'ledger'},
                {label:'Loan Disbursement',link:'loandisbursement'},
                {label:'Defaulter List',link:'defaulter'},
              
            ]

        }
    ]
}
