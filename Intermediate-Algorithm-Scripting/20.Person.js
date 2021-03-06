/**
  Fill in the object constructor with the following methods below:

  getFirstName()
  getLastName()
  getFullName()
  setFirstName(first)
  setLastName(last)
  setFullName(firstAndLast)
  Run the tests to see the expected output for each method. The methods that take an argument must accept only one argument and it has to be a string. These methods must be the only available means of interacting with the object.
 */

function Person(name) {
  let [firstName, lastName] = name.split(' ');

  this.getFirstName = () => firstName;
  this.getLastName = () => lastName;
  this.getFullName = () => firstName + ' ' + lastName;

  this.setFirstName = first => firstName = first;
  this.setLastName = last => lastName = last;
  this.setFullName = (name) => ([firstName, lastName] = name.split(' '));
  this.setFullName(name);
}

var bob = new Person('Bob Ross');