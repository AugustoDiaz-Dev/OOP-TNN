// Prototype

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

var user1 = new User('paulmaccartney@gmail.com', 'Paul McCartney');
var user2 = new User('ringostarr@gmail.com', 'Ringo Starr');

console.log(user1);
user2.login();