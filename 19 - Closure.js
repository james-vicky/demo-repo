// function init() {
//   var firstName = "hitesh";
//   console.log("I am init");

//   function sayFirstName() {
//     console.log(firstName);
//   }
//   return sayFirstName;
// }

// var value = init();

// value();

function doAddition(x) {
    return function (y) {
      return x + y;
    };
  }

  //add5 is holding the reference of the inner function 
  var add5 = doAddition(4);
  console.log(add5(5)); //now the inner function is called
  
  console.log(doAddition(5)(5)); //anothr way of doing the same above method
  //doAddition()()() //curring
  