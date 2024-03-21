import { CustomerAddress } from './CustomerAddress';
import { ApplicantDetails } from './applicant-details';
import { BuilderDetails } from './builder-details';
import { CustomerBankDetails } from './customer-bank-details';
import { CustomerDocumentUpload } from './customer-document-upload';
import { DependantDetails } from './dependant-details';
import { EmploymentDetails } from './employment-details';
import { GuarantorDetails } from './guarantor-details';
import { Mortage } from './mortage';
import { PreviousLoanDetails } from './previous-loan-details';

export class ApplicantForm {
  applicationNumber: number;
  cutomerDetails: ApplicantDetails;
  employmentDetails: EmploymentDetails;
  guarantorDetails: GuarantorDetails;
  customerAddress: CustomerAddress
  applicantDependant: DependantDetails;
  previousloandata:PreviousLoanDetails;
  mortage:Mortage;
  customerbankDetail:CustomerBankDetails;
  builderdetails:BuilderDetails;
  documentUpload:CustomerDocumentUpload;

}
