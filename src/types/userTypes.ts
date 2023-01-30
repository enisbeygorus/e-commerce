export interface IAddress {
  name: string;
  lastName: string;
  phone: string;
  country: string;
  city: string;
  district: string;
  fullAddress: string;
  adddressTitle: string;
}

export interface IUser {
  token: string;
  name: string;
  userId: string;
  isAdmin: boolean;
  adresses: Array<IAddress>;
}
