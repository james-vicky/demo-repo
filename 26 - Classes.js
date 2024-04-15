class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
  
  #courseList = []; //with "#" symbol you can make the courseList as private so you can get it with getters only

  getInfo() { //this is a function and has no errors 
    return { name: this.name, email: this.email };
  }
  enrollCourse(name) {
    this.#courseList.push(name);
  }
  getCourseList() {
    return this.#courseList;
  }

    login() { //when u make this static then inherited classes wont be able to access it 
    return "You are logged in";
  }
}

//with extends keyword SubAdmin inherits all the properties
class SubAdmin extends User {
  constructor(name, email) {
    super(name, email);
  }
  getAdminInfo() {
    return "I am subadmin";
  }
    login() { //over-riding the method
    return "login for admin only";
  }
}

module.exports = User; //once u have exported this class you can use this class anywhere like I have used in 27 - ClassObjects.js


const rock = new User("rock", "rock@rock.com");
//console.log(rock.getInfo());
rock.enrollCourse("Angular Bootcamp");
// console.log(rock.getCourseList());
// console.log(rock.courseList);

const tom = new SubAdmin("tom", "tom@jerry.com"); //creating objects of SubAdmin
console.log(tom.getAdminInfo());
console.log(tom.login());

console.log(tom.getInfo());
