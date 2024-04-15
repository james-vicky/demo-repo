
function getUserRole(name, role){

    switch(role){
        case "admin" : return `${name} is an admin with all access`;
        case "sub-admin" : return `${name} is sub-admin with CRUD access`;
        case "test-prep" : return `${name} is test-prep with test access`;
        case "user" : return `${name} is just a user to consume content`;
        default : return `${name} is a trial user`;
    }
}

 console.log(getUserRole("Vivek", "admin"));
 
 var getRole = getUserRole("Hitesh", "Master");
    console.log(getRole);

//You can write a function inside a variable like below
var getUserRole2 = function (name, role){    
      switch(role){
        case "admin" : return `${name} is an admin with all access`;
        case "sub-admin" : return `${name} is sub-admin with CRUD access`;
        case "test-prep" : return `${name} is test-prep with test access`;
        case "user" : return `${name} is just a user to consume content`;
        default : return `${name} is a trial user`;
    }
}