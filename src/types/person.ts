export interface Address {
  id: number;
  street: string;
  streetName: string;
  buildingNumber: string;
  city: string;
  zipcode: string;
  country: string;
 

}

export interface Person {
  firstname: string;
  lastname: string;
  email: string;
  gender: string;
  image: string;
  phone: string;
  birthday: string;
  website: string;
  address: Address;  
}
