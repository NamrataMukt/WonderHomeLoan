import { LocalAddress } from './local-address';
import { PermenantAddress } from './permenant-address';

export class AddressDetails {
  customerAddressId: number;
  permenantAddress: PermenantAddress;
  localAddress: LocalAddress;
}
