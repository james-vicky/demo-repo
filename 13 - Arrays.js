//Arrays data structures
//You can store heterogenous type of data 
//syntax :

var countries = ["India", "USA", "Japan", "Russia"];
var states = new Array("Rajasthan", "Karnataka", "Delhi");

    console.log(states);
    states[2] = "kerala";
    console.log(states);

var user = ["Vivek", 7999, true];
console.log(user);

user.pop(); //removes the element from the back
console.log(user);

countries.unshift("New value"); // adds an element at the front of the array
console.log(countries);

console.log(user.indexOf("0")); //returns index of the given element or -1 if not available
console.log(Array.from("Vivek"));


// function isEven(element){

//     return element%2===0;
// }

//Arrow function introduction in Array
var isEven = (element) => {
    return element%2==0;
}

var res = [2, 4, 8, 8].every(isEven); //checks for even for every element and returns true if all the elements are even
    console.log(res);

    //writing callback function in one line, no need of paranthesis for single args, no return statements, no flower braces
var result = [2, 4, 6, 8].every( e => e % 2 == 0 );
    console.log(result);

// Fill and Filter in Arrays

var arr = [ 2, 4, 3, 1, 5, 7, 9];
console.log(arr.fill("D")); //fills "V" at every index
console.log(arr.fill("V", 2)); // starts from index 2 to last and fills "V"
console.log(arr.fill("A", 2, 5)); //fills 'A' from index 2 to 5-1;

const nums = [ 23, 25, 26, 27, 13, 22];
const num =   nums.filter((n) => n>20);//Filters the elements based on criteria given and returns the filtered array
    console.log(num);

 // Slice and Splice    
var usersM = ["Ted", "Tim", "Ton", "Sam", "Sor"];
console.log(usersM.slice(1, 3)); //slices the array from index 1 till 3-1

usersM.splice(1, 2, "V"); //Replaces elements from index 1 (starting point) 3(count of elements to replace with) and adds "V" in that position
console.log(usersM);

usersM.splice(0, 1, "A", "B"); //Replace elements from starting point i.e 0 and count elements i.e 1 and replace with 'A' and 'B'
console.log(usersM);