export class Ledger {
  ledgerId: number;
  ledgerCreatedDate: any;
  totalLoanAmount: number;
  payableAmountWithInterest: number;
  tenure: number;
  monthlyEmi: number;
  amountPaidTillDate: number;
  remainingAmount: number;
  nextEmiDateStart: any;
  nextEmiDateEnd: any;
  defaulterCount: number;
  previousEmiStatus: string;
  currentMonthEmiStatus: string;
  loanEndDate: any;
  loanStatus: string;
}
