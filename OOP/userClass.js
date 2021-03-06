export class User {
    #firstName;
    #lastName;
    #email;

    constructor(firstname, lastname, email) {
        this.#firstName = firstname;
        this.#lastName = lastname;
        this.#email = email;
    }
    getFullName() {
        return this.#firstName + this.#lastName;
    }
    getEmail() {
        return this.#email;
    }
}