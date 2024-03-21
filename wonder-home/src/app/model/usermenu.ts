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
                {label:'View Apply Loan Applicant',link:'viewloanapplied'}
            ],

            CreditManager:[
                {label:'Dashboard',link:'c-dash'}
            ],
            accounthead:[
                {label:'Ledger',link:'ledger'},
                {label:'Loan Disbursement',link:'loandisbursement'},
                {label:'Defaulter List',link:'defaulter'},
            ],
            opm:[
                {label:'Dashboard',link:'dashboard'},
                {label:'applicants' , link:'applicants'},
                {label:'approved-customer' , link:'approved-customer'},
                {label:'verification required' ,link:'verification-required'}
            ]

        }
    ]
}
