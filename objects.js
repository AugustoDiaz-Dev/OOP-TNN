// Prototype Inheritance

function User(email, name) {
    // This is the constructor function
    this.email = email;
    this.name = name;
    this.online = false;
}

User.prototype.login = function () {
    this.online = true;
    console.log(`${this.email} has logged in`);
}

User.prototype.logout = function () {
    this.online = false;
    console.log(`${this.email} has logged out`);
}

function Admin(...args) {
    User.apply(this, args);
    this.role = 'super admin';
}

// Inherit from User
Admin.prototype = Object.create(User.prototype);

// Create a new method for Admin
Admin.prototype.deleteUser = function (u) {
    users = users.filter(user => {
        return user.email !== u.email;
    });
}

var user1 = new User('paulmaccartney@gmail.com', 'Paul McCartney');
var user2 = new User('ringostarr@gmail.com', 'Ringo Starr');
var admin = new Admin('augustordiaz@gmail.com', 'Augusto Diaz');

var users = [user1, user2, admin];

console.log(admin)
