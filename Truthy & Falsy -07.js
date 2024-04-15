
//All the below values are considered as falsy values
// undefined
// null
// 0
// ''
// NaN

    var user = "2";

    //not so strict check
    if(user == 2){
    console.log("Condition is True 1");
    } else{
        console.log("Condition is False 1");
    }

    //Strict check
    if(user === 2){
        console.log("Condition is True 2");
    } else {
        console.log("Condition is False 2");
    }



