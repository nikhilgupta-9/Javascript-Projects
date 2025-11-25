// first we learn about map function and it is high order function 

const number = [1,2,3,4,5,6,];
const square =()=>{
    const squareNumber = number.map((num)=> num * num);
    console.log(squareNumber);
}
square();

const avgMarks =()=>{
    const marks = number.map((num)=> num + 10);
    console.log(marks);
}
avgMarks();