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

            CreditManager:[

                {label:'Verified-Applications',link:'verifiedapplications'},
                {label:'Approved-Applications',link:'approvedapplications'},
                {label:'Credit-Procedure',link:'creditprocedure'},
                
            ],
            accounthead:[
                {label:'Ledger',link:'ledger'},
                {label:'Loan Disbursement',link:'loandisbursement'},
                {label:'Defaulter List',link:'defaulter'},
            ],
            opm:[
                {label:'Dashboard',link:'dashboard'},
                {label:'Loan-Enquiries' , link:'applicants'},
                {label:'Loan-Applications' , link:'approved-customer'},
                {label:'verification required' ,link:'verification-required'}
            ]

        }
    ]
}
