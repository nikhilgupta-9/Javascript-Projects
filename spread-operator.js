console.log("spread operater in js file");

// exmaple 1 for spreay operator 
let arr = [10,20,30,40];

function avg(a,b,c){
    return(a+b+c)/3;
} 

let a = avg(...arr);
console.log(a);