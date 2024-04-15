// For Loops
// Syntax:
// for(let i=1; i<=12; i++)
// { console.log(i);}

const myStates = [
    "Karnataka",
    "Delhi",
    "Assam",
    1947,
    "Tamil Nadu"
];

for(let i=0; i<myStates.length; i++){   
    if(typeof myStates[i] !== "string") continue;
    console.log(myStates[i]);
}

// While loops
    let j = 10;
    while(j-->0)
    { console.log(j);  }

// do while loop
    let i = 99;
    do {
        console.log(i);
        i++;
    }
    while(i<101);

    // Tricky Questions
    let k=0;
    for( ; ; )
    {
        if(k>3) break;
        console.log(k);
        k++;
    }

// looping in a single line with advanced for loop
    myStates.forEach(s => (console.log(s)));
    
    console.log();
    console.log();

// For of loop
   const names = ["Youtube", "Amazon", "Instagram", "Netflix"];
   for(const s of names) {
    console.log(s);
   } 

   console.log();
   console.log();

// For in loop
const symbols = {
    yt : "Youtube",
    ig : "Instagram",
    fb : "FaceBook",
}

for ( const n in symbols) {
    console.log(symbols[n]); //prints values
    console.log(`Key is: ${n} and value is ${symbols[n]}`);
}

