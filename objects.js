// How to update an Object?

const userOne = {
    // Properties
    email: 'lennonjohn@gmail.com',
    name: 'John',
    // Methods
    login() {
        console.log(`${this.email} has logged in.`);
    },
    logout() {
        console.log(`${this.email} has logged out.`);
    }
}

userOne.name = 'John Lennon'; // Update a value with dot notation
userOne['email'] = 'johnlennon@mail.ru' // Update a value with bracket notation

userOne.age = 81; // Add a new property
userOne.logInfo = function () {
    console.log('Adding information about the user')
} // Add a new method

console.log(userOne.email);
console.log(userOne.name);
userOne.login();
userOne.logout();