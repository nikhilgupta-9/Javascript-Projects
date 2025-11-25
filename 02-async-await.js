// Asyn Await learning 

console.log("this is async await js file");

async function sayHello(){
    return "hello world";
}
let a = sayHello();

setTimeout(()=>{
    console.log(a);

}, 1000);
