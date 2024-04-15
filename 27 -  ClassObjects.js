// import User from "./06classjs";

const User = require("./26 - Classes.js"); //using the previous class

const hitesh = new User("hitesh", "hitesh@lco.dev"); //creating user object

console.log(hitesh.getInfo()); //running the methods
hitesh.enrollCourse("React Bootcamp");
hitesh.enrollCourse("Angular Bootcamp");

console.log(hitesh.getCourseList());

let courses = hitesh.getCourseList();

courses.forEach((c) => console.log(c));
