class User {
  constructor(email, name) {
    this.email = email;
    this.name = name;
    this.number = number;
  }
  login() {
    console.log(this.email + " logged in");
  }
  logout() {
    console.log(this.email + " logged out");
  }
}

class Admin extends User {
  deleteUser() {}
}

var userone = new User(
  "shani.tripathi01@gmail.com",
  "shani tripathi",
  "8890147728"
);
var userone = new User("shani.tripathi98@gmail.com", "shani na rayan tripathi");

userone.login();
userone.logout();
