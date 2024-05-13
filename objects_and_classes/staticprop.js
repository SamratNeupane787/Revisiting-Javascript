class User {
  constructor(username) {
    this.username = username;
  }

  logMe() {
    console.log(`Username : ${this.username}`);
  }

  static createId() {
    {
      return `123`;
    }
  }
}

const sam = new User("sam");

console.log(sam.createId());
