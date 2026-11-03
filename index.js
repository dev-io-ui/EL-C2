// console.log("Hello, World!");

// let name = "Akash";
// console.log(typeof name);
// const pie = 3.14;
// console.log(typeof pie);
// var price = 100;

// var price = 200;

//  name ="smartbridge";
//  pie = 5;

// console.log(name);
// console.log(pie);
// console.log(price);

// let isLoggedIn = false;
// console.log(typeof isLoggedIn);

// let fruits = ["apple", "banana", "mango"];
// console.log(typeof fruits);

// let students ={
//     name: "Akash",
//     age: 22,
// }

// let greet = function(){
//     console.log("Hello, Students!");
// }
// greet();




let a = 10;
let b = "20";

console.log(a + b);

console.log(5 == "5"); // only value should be same for loose equality
console.log(5 === "5");// Datatype as well as value should be same for strict equality


//Arth

// console.log(5 + 3); // 8
// console.log(5 - 3); // 2
// console.log(5 * 3); // 15
// console.log(5 / 3); // 1.666...
// console.log(5 % 3); // 2


// let x = 5;
// let y = 5;


// if (x >= y) {
//     console.log("x is greater than y");
// } else if (x < y) {
//     console.log("x is less than y");
// }


// let raining= false  ;
// let homeworkDone = false;

// if(raining || homeworkDone){
//     console.log("You can go outside and play");
// }
// else{
//     console.log("You cannot go outside and play");
// }


// let age = 15;

// if (age >= 18) {
//     console.log("You are eligible to vote");
// } else {
//     console.log("You are not eligible to vote");
// }

// let cibil_score = 750;

// if (cibil_score >= 750) {
//     console.log("You are eligible for loan");
// }
// else {
//     console.log("You are not eligible for loan");
// }

//A 90-100 B 80-89 C 70-79  F <60

// let marks = 105;

// if (marks > 0 && marks <= 100) {
//     if (marks >= 90 && marks <= 100) {
//         console.log("You got A grade");
//     } else if (marks >= 80 && marks < 90) {
//         console.log("You got B grade");
//     } else if (marks >= 70 && marks < 80) {
//         console.log("You got C grade");
//     } else {
//         console.log("You got F grade");
//     }
// } else {
//     console.log("Please check you Marks, Seems Wrong");
// }


let button = 2;

switch(button){
    case 1:
         console.log("Check your Bal");
         break;
    case 2: 
        console.log("Withdraw your Bal");
        break;
    case 3: 
        console.log("Deposit your Bal");
        break;
    case 4: 
        console.log("Exit");
        break;
    default: console.log("Error from your side");
}