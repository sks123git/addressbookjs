//Creating address book class
class AddressBookContact {
  firstName;
  lastName;
  address;
  city;
  state;
  zip;
  phone;
  email;

  constructor(...params) {
    this.firstName = params[0];
    this.lastName = params[1];
    this.address = params[2];
    this.city = params[3];
    this.state = params[4];
    this.zip = params[5];
    this.phone = params[6];
    this.email = params[7];
  }
  // checking pattern for first and last name
  getFirstName() {
    return this.firstName;
  }
  setFirstName(firstName) {
    let nameRegex = RegExp('^[A-Z]{1}[a-z]{3,}');
    if (nameRegex.test(firstName)) {
      this.firstName = firstName;
    } else throw 'name is incorrect';
  }
  getLastName() {
    return this.lastName;
  }
  setLastName(lastName) {
    let nameRegex = RegExp('^[A-Z]{1}[a-z]{3,}');
    if (nameRegex.test(lastName)) {
      this.lastname = lastName;
    } else throw 'name is incorrect';
  }
  // checking pattern for address, city and state
  getAddress() {
    return this.address;
  }
  setAddress(address) {
    let addressRegex = RegExp('[(A-Z)(a-z)]{4,}');
    if (addressRegex.test(address)) {
      this.address = address;
    } else throw 'address is incorrect please enter 4 digit';
  }
  getCity() {
    return this.city;
  }
  setCity(city) {
    let addressRegex = RegExp('[(A-Z)(a-z)]{4,}');
    if (addressRegex.test(city)) {
      this.city = city;
    } else throw 'address is incorrect please enter 4 digit';
  }
  getState() {
    return this.state;
  }
  setState(state) {
    let addressRegex = RegExp('[(A-Z)(a-z)]{4,}');
    if (addressRegex.test(state)) {
      this.state = state;
    } else throw 'address is incorrect please enter 4 digit';
  }
  getZip() {
    return this.zip;
  }
  setZip(zip) {
    this.zip = zip;
  }
  getPhone() {
    return this.phone;
  }

  setPhone(phone) {
    this.phone = phone;
  }

  getEmail() {
    return this.email;
  }

  setEmail(email) {
    this.email = email;
  }
  toString() {
    return (
      'FirstName:' +
      this.firstName +
      ', LastName:' +
      this.lastName +
      ', address:' +
      this.address +
      ', city:' +
      this.city +
      ', state:' +
      this.state +
      ', zip:' +
      this.zip +
      ', phone:' +
      this.phone +
      ', email:' +
      this.email
    );
  }
}

let shubham = new AddressBookContact(
  'shubham',
  'singh',
  'karnataka',
  'bangalore',
  'karnataka',
  123456,
  9027364028,
  'shubh@am'
);
let addressBookArray = new Array();
addressBookArray.push(shubham);
addressBookArray.push(
  new AddressBookContact(
    'kundan',
    'chavan',
    'Bihar',
    'bangalore',
    'karnataka',
    123456,
    9027364028,
    'kun@dan'
  )
);
//modify existing contact person on basis of name
let obj = addressBookArray.find((a) => a.firstName === 'thakur');
if (obj != undefined) {
  addressBookArray.pop();
  obj.setFirstName('Tanuja');
  obj.setLastName('Chaugule');
  obj.setAddress('maharashtra');
  obj.setCity('mumbai');
  obj.setState('maharashtra');
  obj.setZip(12345);
  obj.setPhone(9257268112);
  obj.setEmail('tanu@ja');
  addressBookArray.push(obj);
  addressBookArray.forEach((a) => console.log(a.toString()));
} else {
  console.log('Not found');
}
//delete contact person on basis of name
let objToDelete = addressBookArray.find((a) => a.firstName === 'kundan');
if (objToDelete != undefined) {
  addressBookArray.pop();
  console.log('Person found and record deleted');
  addressBookArray.forEach((a) => console.log(a.toString()));
} else {
  console.log('Not found');
}
//find count of contacts in address book
let count = addressBookArray.reduce(function count(c) {
  return c + 1;
}, 0);
console.log(count);
//check for duplicate entry
let newName = 'shubham';
let bool = addressBookArray.find((obj) => obj.firstName === newName);
console.log(bool);
//check for person by particular city or state
addressBookArray.forEach((obj) => {
  if (obj.city === 'bangalore') console.log(obj.toString());
});
addressBookArray.forEach((obj) => {
  if (obj.state === 'karnataka') console.log(obj.toString());
});
