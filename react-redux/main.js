class User {
  constructor(email, name) {
    this.email = email;
    this.name = name;
  }
  login() {
    console.log(this.email + " logged in");
  }
  logout() {
    console.log(this.email + " logged out");
  }
}

var userone = new User("shani.tripathi01@gmail.com", "shani tripathi");
var userone = new User("shani.tripathi98@gmail.com", "shani na rayan tripathi");

userone.login();
userone.logout();
