//Switch cases
var user = "testprep";
switch (user)
{
    case "admin" : console.log("You get full access");
                   break;
    case "subadmin" : console.log("You get partial access");
                   break;
    case "user" : console.log("You get limited access");
                   break;
    default : console.log("Go ahead and try");
                   break;   
}