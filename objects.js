// Class Inheritance

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

class Admin extends User {
    deleteUser(user) {
        users = users.filter(u => {
            return u.email != user.email
        });
    }
}

var user1 = new User('paulmaccartney@gmail.com', 'Paul McCartney');
var user2 = new User('ringostarr@gmail.com', 'Ringo Starr');
var admin = new Admin('augustordiaz@gmail.com', 'Augusto Diaz');

var users = [user1, user2, admin];

admin.deleteUser(user2);
// user2.deleteUser(user1); // won't work because ordinary users don't have that method

console.log(users);