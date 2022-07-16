// Constructors

function User(email, name) {
    // This is the constructor function
    this.email = email;
    this.name = name;
    this.online = false;
    this.login = function () {
        console.log(`${this.email} has logged in`);
        this.online = true;
    }
}

var user1 = new User('paulmaccartney@gmail.com', 'Paul McCartney');
var user2 = new User('ringostarr@gmail.com', 'Ringo Starr');

console.log(user1);
user2.login();