class AccessorCustomer {

    constructor(private _firstName: string, 
        private _lastName: string) {
    }

    public get firstName(): string {
        return this._firstName;
    }

    public set firstName(value: string) {
        this._firstName = value;
    }

    public get lastName(): string {
        return this._lastName;
    }

    public set lastName(value: string) {
        this._lastName = value;
    }
}


let myAccessorCustomer = new AccessorCustomer("Martin", "VJ");
console.log(myAccessorCustomer.firstName);
console.log(myAccessorCustomer.lastName);

myAccessorCustomer.firstName = "Fiona";
myAccessorCustomer.lastName = "Sourdough";
console.log(myAccessorCustomer.firstName);
console.log(myAccessorCustomer.lastName);
