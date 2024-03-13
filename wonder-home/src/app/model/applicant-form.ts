import { AddressDetails } from './address-details';
import { ApplicantDetails } from './applicant-details';
import { DependantDetails } from './dependant-details';
import { EmploymentDetails } from './employment-details';
import { GuarantorDetails } from './guarantor-details';

export class ApplicantForm {
  applicationNumber: number;
  applicantDetails: ApplicantDetails;
  employmentDetails: EmploymentDetails;
  guarantorDetails: GuarantorDetails;
  addressDetails: AddressDetails;
  dependantDetails: DependantDetails;
}
