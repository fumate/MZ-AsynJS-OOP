export class User {
    firstName;
    lastName;
    email;

    constructor(firstname, lastname, email) {
        this.firstName = firstname;
        this.lastName = lastname;
        this.email = email;
    }
    getFullName() {
        return this.firstName + " " + this.lastName;
    }
    getEmail() {
        return this.email;
    }
}

/*
let user = new User("John", "Doe", "johndoe@asd.com");
let a = user.getFullName();
let b = user.getEmail();
console.log(a);
console.log(b);*/
