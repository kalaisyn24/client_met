import {AddressModel} from './AddressModel';
import {PhoneModel} from './PhoneModel';


export interface UsersModel {
  id: number;
  fioData: string;
  ageData: number;
  balance: number;
  charmData: string;
  addressOfResidence: AddressModel;
  registrationAddress: AddressModel;
  phone: PhoneModel;
}
