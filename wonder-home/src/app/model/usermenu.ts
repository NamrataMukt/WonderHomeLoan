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
            ]
        }
    ]
}
