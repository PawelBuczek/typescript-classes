export class Customer {

    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName:string)  {
         this.firstName=firstName;
         this.lastName=lastName;
    }
}

let myCustomer = new Customer("Sarah", "BS");

console.log(myCustomer.firstName + " " + myCustomer.lastName);

myCustomer.firstName = "Martin";
myCustomer.lastName = "VJ";

console.log(myCustomer.firstName + " " + myCustomer.lastName);