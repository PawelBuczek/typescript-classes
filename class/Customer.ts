class Customer {

    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName:string)  {
         this.firstName=firstName;
         this.lastName=lastName;
    }
}

let myCustomer1 = new Customer("Sarah", "BS");

console.log(myCustomer1.firstName + " " + myCustomer1.lastName);

myCustomer1.firstName = "Martin";
myCustomer1.lastName = "VJ";

console.log(myCustomer1.firstName + " " + myCustomer1.lastName);