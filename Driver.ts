import { Customer } from "./Customer";

let myCustomer = new Customer("P", "B");

myCustomer.printFullName();

myCustomer.firstName = "Orc";
myCustomer.lastName = "Bolg";

myCustomer.printFullName();