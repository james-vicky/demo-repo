//Creating objects with function method/blueprint
var User = function (firstName, courseCount) {
    this.firstName = firstName;
    this.courseCount = courseCount;
    this.getCourseCount = function () {
      console.log(`Course count is: ${this.courseCount}`);
    };
  };
  
  //We can inject some properties later
  User.prototype.getFirstname = function () {
    console.log(`Your firstname is : ${this.firstName}`);
  };
  
  var hitesh = new User("hitesh", 2);
  hitesh.getCourseCount();
  
  //Asking if there is property called firstName in the object
  if (hitesh.hasOwnProperty("firstName")) {
    hitesh.getFirstname();
  }
  
  //Similarly javascript injects all the properties in a object like it injects length property in Array object 
  // Nearly all objects is js are instances of objects and inherits some properties from Objects.prototype

  //console.log(hitesh);
  var sam = new User("Sam", 1);
  sam.getCourseCount();
  sam.getFirstname();
  //console.log(sam);


//Another way of creating a prototype
  var User = {
    name: "",
    getUserName: function () {
      console.log(`User name is : ${this.name}`);
    },
  };
  
  var hitesh = Object.create(User);
  console.log(hitesh);
  hitesh.name = "hitesh Choudhary";
  hitesh.getUserName();
  
  //Another way of creating an object by passing values in a constructor
  var sam = Object.create(User, {
    name: { value: "sammy" },
    courseCount: { value: 3 },
  });
  
  sam.getUserName();
  
  