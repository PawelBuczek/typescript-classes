export class Customer {

    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName:string)  {
         this.firstName=firstName;
         this.lastName=lastName;
    }

    printFullName() {
        console.log(this.firstName + " " + this.lastName);
    }
}

let myCustomer = new Customer("Sarah", "BS");

myCustomer.printFullName();

myCustomer.firstName = "Martin";
myCustomer.lastName = "VJ";

myCustomer.printFullName();