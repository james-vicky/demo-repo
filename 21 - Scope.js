//console.log(name);

var name = "hitesh";
//last name will be available to me even after the scope will be over because of "var" keyword

if (true) {
  let lastName = "Choudhary"; //Once the scope is over then last name id not accessible (because of "let" keyboard)
}
console.log(lastName);
