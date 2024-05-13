class User {
  constructor(username) {
    this.username = username;
  }
  logMe() {
    console.log(`Username is ${this.username}`);
  }
}

class Teacher extends User {
  constructor(username, email, password) {
    super(username);
    this.email = email;
    this.password = password;
  }
  addCourse() {
    console.log(`A new course added by ${this.username}`);
  }
}

const funda = new Teacher("hari", "hari@gmail.com", "1245");

funda.addCourse();

const masalaChai = new User("masalaChai");

masalaChai.logMe();

console.log(funda == masalaChai); //false
