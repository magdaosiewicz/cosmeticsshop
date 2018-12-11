export class User{

  _id?: any;
  surname: string;
  name: string;

  username: string;
  password: string;
  email:string;
  country: string;
  city: string;
  streetAddress: string;
  houseNumber: string;
  province: string;
  postCode: string;


  constructor( surname: string,name: string, username: string, password: string, email: string, country: string, city: string, streetAddress: string, houseNumber: string, province: string, postCode: string) {
    this.name = name;
    this.surname = surname;
    this.username = username;
    this.password = password;
    this.email = email;
    this.country = country;
    this.city = city;
    this.streetAddress = streetAddress;
    this.houseNumber = houseNumber;
    this.province = province;
    this.postCode = postCode;
  }
}
