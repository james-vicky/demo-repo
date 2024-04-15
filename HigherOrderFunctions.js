function create (caller){
  return new caller();
}

function caller(){
  console.log("Caller function for Higher Order Function");
}
