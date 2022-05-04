export interface ICompany {
  name: string;
}
export interface IAdress {
  street: string;
  city: string;
  zipcode: string;
}

export interface IUser {
  id: string;
  name: string;
  username: string;
  email: string;
  address: IAdress;
  company: ICompany;
  phone: string;
  website: string;
  comment?: string;
}
