import { Customer } from "./Customer";

let myCustomer = new Customer("P", "B");

console.log(myCustomer.firstName + " " + myCustomer.lastName);

myCustomer.firstName = "Orc";
myCustomer.lastName = "Bolg";

console.log(myCustomer.firstName + " " + myCustomer.lastName);