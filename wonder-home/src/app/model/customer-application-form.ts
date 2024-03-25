import { CustomerAddress } from "./CustomerAddress";
import { BuilderDetails } from "./builder-details";
import { CustomerBankDetails } from "./customer-bank-details";
import { CustomerBasicDetails } from "./customer-basic-details";
import { CustomerDocumentUpload } from "./customer-document-upload";
import { DependantDetails } from "./dependant-details";
import { EmploymentDetails } from "./employment-details";
import { GuarantorDetails } from "./guarantor-details";
import { Mortage } from "./mortage";
import { PreviousLoanDetails } from "./previous-loan-details";

export class CustomerApplicationForm 
{
   applicationNumber:string;
	
    cutomerDetails:CustomerBasicDetails;
	
     applicantDependant:DependantDetails;
	
    customerAddress: CustomerAddress;
	employmentDetails: EmploymentDetails;
	previousloandata:PreviousLoanDetails;
	mortage: Mortage; 
	
	 guarantorDetails: GuarantorDetails;
	
	 customerbankDetail: CustomerBankDetails;
	
	 builderdetails: BuilderDetails;
	
	 documentUpload:CustomerDocumentUpload ;
	

}
