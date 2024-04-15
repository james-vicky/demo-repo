var myMap = new Map();

myMap.set(1, "Uno");
myMap.set(2, "dos");
myMap.set(3, "Tres");
myMap.set(4, "Cuatro");

console.log(myMap);

for (let key of myMap.keys()) { //getting the keys
  console.log(`Key is ${key}`);
}

for (let value of myMap.values()) { //geting only values
  console.log(`Value is ${value}`);
}

for (let [key, value] of myMap) { //getting both key and values
  console.log(`Key is : ${key} and Value is ${value}`);
}

myMap.forEach((v, k) => console.log(`${v} and key is ${k}`)); //another way of traversing

myMap.delete(2); //deletes the key with value 2 is deleted
console.log(myMap);
