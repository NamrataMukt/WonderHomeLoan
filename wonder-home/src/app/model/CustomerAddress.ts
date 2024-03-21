import { LocalAddress } from './local-address';
import { PermenantAddress } from './permenant-address';

export class CustomerAddress {
  customerAddressId: number;
  permenantAddress: PermenantAddress;
  localAddress: LocalAddress;
}
