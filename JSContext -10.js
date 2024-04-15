
//This is possible in JS unlike any other languages because of Context Concept
sayhello();

function sayhello()
{
    console.log("Hey Hello");
}

if(2 === "2") console.log("ITS TRUE");

// var name = "Vivek";
// //The below code works in browser console as the context there is window
// if(name === window.name)
// {
//     console.log("ITs true again.")
// }

// Context 
//     Execution Context
//         variable Object
//         Scope Chain 
//         this 
// Function Declarations are scanned and made available
// Variable declarations are scanned and made undefined

// The browser's JavaScript engine then creates a special environment to handle the transformation and execution of this JavaScript code. This environment is known as the Execution Context.
// The Execution Context contains the code that's currently running, and everything that aids in its execution.
// During the Execution Context run-time, the specific code gets parsed by a parser, the variables and functions are stored in memory, executable byte-code gets generated, and the code gets executed.

// There are two kinds of Execution Context in JavaScript:
// Global Execution Context (GEC)
// Function Execution Context (FEC)

//The below code runs fine because of Global context
tipper("5");

function tipper(a) {
                //parseInt converts string to int
    var bill = parseInt(a);
    console.log(bill+5);
}

//The below code results in error because variable declarations are made undefined
bigTipper("200");

var bigTipper = function(a) {
    var bill = parseInt(a);
    console.log(bill + 15);
}


//The below code results in error because variable declarations are made undefined

var bigTipper = function(a) {
    var bill = parseInt(a);
    console.log(bill + 15);
}

console.log(bigTipper("200")); //This runs fine

//The below myName is undefined when run because it is defined after printing
console.log(myName);
var myName = "Vivek";