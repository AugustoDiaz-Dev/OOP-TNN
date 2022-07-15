// Create a class 

class User {
    constructor(email, name) {
        this.email = email;
        this.name = name;
    }
}

const user1 = new User('paulmaccartney@gmail.com', 'Paul McCartney');
const user2 = new User('ringostarr@gmail.com', 'Ringo Starr');
const user3 = new User('georgeharrison@gmail.com', 'George Harrison');
const user4 = new User('johnlennon@gmail.com', 'John Lennon');

console.log(user1);
console.log(user2);
console.log(user3);
console.log(user4);

// The 'new' keyword.
// It creates a new empty object {}
// It sets the value of 'this' to be the new empty object
// It calls the constructor method