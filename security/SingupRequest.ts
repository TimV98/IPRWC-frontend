export class SingupRequest {
  email: string;
  password: string;
  firstName: string;
  prefix: string;
  lastName: string;
  address: string;
  zipCode: string;
  houseNumber: number;
  phoneNumber: number;


  constructor(email: string, password: string, firstName: string, prefix: string, lastName: string, address: string, zipCode: string, houseNumber: number, phoneNumber: number) {
    this.email = email;
    this.password = password;
    this.firstName = firstName;
    this.prefix = prefix;
    this.lastName = lastName;
    this.address = address;
    this.zipCode = zipCode;
    this.houseNumber = houseNumber;
    this.phoneNumber = phoneNumber;
  }
}
