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
            opm:[
                {label:'Dashboard',link:'dashboard'},
                {label:'applicants' , link:'applicants'},
                {label:'approved-customer' , link:'approved-customer'},
                {label:'verification required' ,link:'verification-required'}
                

            ]

        }
    ]
}
