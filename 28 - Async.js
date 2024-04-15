const uno = () => {
  console.log("I am One");
};

const dos = () => {
  setTimeout(() => {
    console.log("Wooohoooo"); //waits for 5 seconds and executes the statements inside the setTtimout
  }, 5000);
  console.log("I am Two");
};

const tres = () => {
  console.log("I am Three");
};

uno();
dos();
tres();
