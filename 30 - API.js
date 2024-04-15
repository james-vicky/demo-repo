fetch("https://api.chucknorris.io/jokes/random") //fetches the data
  .then((response) => { //if the response after fetch is positive then the functions will be executed
    return response.json(); //you get a promise
  })
  .then((data) => {
    // console.log("DATA is :", data);
    var joke = data.value; //gets the values from the object returned from API 
    console.log("JOKE:", joke);
  })
  .catch(); //for handling errors
