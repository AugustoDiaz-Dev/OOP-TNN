// How to create a simple Object?

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

console.log(userOne.email);
console.log(userOne.name);
userOne.login();
userOne.logout();