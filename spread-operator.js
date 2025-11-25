console.log("spread operater in js file");

// exmaple 1 for spread operator 
let arr = [10,20,30,40];

function avg(a,b,c){
    return(a+b+c)/3;
} 

let a = avg(...arr);
// console.log(a);

// example 2 - array concatination 

let arr1 = [90,60,45];
let arr2 = [15,60,86];

let arr3 = [...arr1, ...arr2];
// console.log(arr3);


// now example 3 - object copy 

let obje1 = {
    name: "nikhil",
    age: 24,
    course: "MERN"
}

let obj2 = {...obje1, location: "Australia"};
console.log(obj2);

let obj3 = {...obje1, name: "Nikhil Gupta"};
console.log(obj3);