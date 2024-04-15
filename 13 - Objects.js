
var user = {
    firstName : "Vivekanand",
    lastName : "Vernekar",
    role : "Software Developement Engineer",
    loginCount : 79,
    facebookSignedIn : true,
};

    console.log(user.firstName);
    console.log(user["lastName"]);

console.log(user.loginCount);
user.loginCount = 50; //updating the values
console.log(user.loginCount);

    //Printing the objects in table format 
    console.table(user);

//Methods and objects

    var user2 = {
        firstName: "Hitesh",
        lastName: "Choudhary",
        role: "Admin",
        loginCount: 32,
        facebookSignedIn: true,
        courseList: [],
        buyCourse: function (courseName) { //method inside object
          this.courseList.push(courseName); //adds element to courseList array
        }, //this refers to user2 object

        getCourseCount: function () {
          return `${this.firstName} is enrolled in total of ${this.courseList.length} courses`;
        },
      };
      
      var courseList = true;
      console.log(user2.firstName);
      console.log(user2.getCourseCount());

      user2.buyCourse("React JS course"); //adding courses to object list by calling function
      user2.buyCourse("Angular course");
      console.log(user2.getCourseCount());
