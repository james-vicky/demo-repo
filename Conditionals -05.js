
var email = true;
var facebook = false;
var google = false;

//Write logic for logging in

if(email || facebook || google)
{
    console.log("Login Sucessful"); }


//Show user signout button if he is authenticated
//or show him option of signup

var authenticated = true;
if(authenticated) {
    console.log("Show signout button");
}
else {
    console.log("Show sign in button");
}

//Ternary Operators:
authenticated ? console.log("Show signout button") : console.log("Show sign in button");