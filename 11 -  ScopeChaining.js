var name = "Hitesh";

    console.log("Line number 3", name);

function sayName(){
    var name = "sammy";
    console.log("Line number 7 ", name);

    sayName2();
    function sayName2()
    {   //searches name variable in scope if not found goes to the above scope
        console.log("Line number 11 ", name);
    }
}

 sayName();