// this : for all regular function calls this points to the window object


console.log(this);
var user = {
    firstName : "Vivek",
    courseCount : 4,
    getCourseCount : function (){
        console.log("Line 7 ", this);
        function sayHello(){
            console.log("Hello");
            console.log("Line 12", this);
        }
        sayHello();
    },
};

user.getCourseCount(); //this is not a regular function call
