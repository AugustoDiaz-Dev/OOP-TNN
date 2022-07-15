// Method Chaining

class User {
    // In the constructor, we can set the properties of the object
    constructor(email, name) {
        this.email = email;
        this.name = name;
        this.score = 0;
    }
    // We can also add methods to the class, outside of the constructor
    login() {
        console.log(`${this.email} has logged in`);
        return this; // We can return the object itself, so we can chain methods
    }
    logout() {
        console.log(`${this.email} has logged out`);
        return this;
    }
    updateScore() {
        this.score++;
        console.log(this.email, 'score is now', this.score);
        return this;
    }
}

const user1 = new User('paulmaccartney@gmail.com', 'Paul McCartney');
const user2 = new User('ringostarr@gmail.com', 'Ringo Starr');
const user3 = new User('georgeharrison@gmail.com', 'George Harrison');
const user4 = new User('johnlennon@gmail.com', 'John Lennon');

user1.login().updateScore().updateScore().logout();