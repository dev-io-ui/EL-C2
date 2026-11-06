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




// let a = 10;
// let b = "20";

// console.log(a + b);

// console.log(5 == "5"); // only value should be same for loose equality
// console.log(5 === "5");// Datatype as well as value should be same for strict equality


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


// let button = 2;

// switch(button){
//     case 1:
//          console.log("Check your Bal");
//          break;
//     case 2: 
//         console.log("Withdraw your Bal");
//         break;
//     case 3: 
//         console.log("Deposit your Bal");
//         break;
//     case 4: 
//         console.log("Exit");
//         break;
//     default: console.log("Error from your side");
// }



// for(let i = 1; i <=10; i++){
//     console.log(i);
// }

// for (let i=1;i<=10;i++){
//    if(i%2 == 0 ){
//      console.log(i);
//    }
// }


//prime no , 


// let num = 7;
// let isPrime = true;


// while(isPrime){


// }
// let day = "Sunday";
// let notHoliday = true;
// while(notHoliday){
//     if(day === "Sunday"){
//         console.log("Today is Holiday");
//         notHoliday = false;
//     }
// }

// console.log("Outside the loop");


// function greetingToStudents(name)
// {
//     console.log(`Hello ${name}` );
// }

// greetingToStudents("Akash");
// greetingToStudents("Dev");
// greetingToStudents("Mansi");




// function isStudent() {
//     console.log("hello");
// }


// isStudent(); //sir this is code is not giving any output


// let students =["Akash","Dev","Virat","Mansi","Rohit","Rohit","Rohit","Rohit","Rohit","Rohit","Rohit","Rohit","Rohit","Rohit","Rohit","Harry"];

//     students.push("Harry");
//     students[0] = "Yash";
//     students.pop();

//     for(let i = 0 ; i < students.length;i++){
//         console.log(students[i]);
//     }

let student ={
    name: "Akash",
    age: 22,
    fees: 10000,
    techStack: ["HTML","CSS","JS"],
}

student.age =50;
student.progress = 80;

// console.log(student.name);
// console.log(student.age);
// console.log(student.techStack[1]);
// console.log(student.progress);

//  let key = Object.keys(student);
//  console.log(key);

//  for(let i = 0 ; i < key.length;i++){
//      console.log(key[i] + ": " + student[key[i]]); // student["name"] => student.name
//  }


const marketData = [
    { symbol: "RELIANCE", company: "Reliance Industries", sector: "Energy", ltp: 1450, previousClose: 1420, changePercent: 2.11, volume: 8500000, marketCap: 1950000, dayHigh: 1465, dayLow: 1410 },
    { symbol: "TCS", company: "Tata Consultancy Services", sector: "IT", ltp: 3850, previousClose: 3900, changePercent: -1.28, volume: 2100000, marketCap: 1400000, dayHigh: 3910, dayLow: 3830 },
    { symbol: "INFY", company: "Infosys", sector: "IT", ltp: 1650, previousClose: 1600, changePercent: 3.13, volume: 6200000, marketCap: 680000, dayHigh: 1670, dayLow: 1590 },
    { symbol: "HDFCBANK", company: "HDFC Bank", sector: "Banking", ltp: 1750, previousClose: 1780, changePercent: -1.69, volume: 5100000, marketCap: 1320000, dayHigh: 1790, dayLow: 1735 },
    { symbol: "ICICIBANK", company: "ICICI Bank", sector: "Banking", ltp: 1250, previousClose: 1200, changePercent: 4.17, volume: 7800000, marketCap: 880000, dayHigh: 1260, dayLow: 1195 },
    { symbol: "BHARTIARTL", company: "Bharti Airtel", sector: "Telecom", ltp: 1850, previousClose: 1820, changePercent: 1.65, volume: 3400000, marketCap: 1100000, dayHigh: 1870, dayLow: 1810 },
    { symbol: "ITC", company: "ITC Limited", sector: "FMCG", ltp: 450, previousClose: 460, changePercent: -2.17, volume: 9200000, marketCap: 560000, dayHigh: 463, dayLow: 445 },
    { symbol: "SBIN", company: "State Bank of India", sector: "Banking", ltp: 820, previousClose: 800, changePercent: 2.50, volume: 10500000, marketCap: 730000, dayHigh: 830, dayLow: 795 },
    { symbol: "LT", company: "Larsen & Toubro", sector: "Infrastructure", ltp: 3600, previousClose: 3550, changePercent: 1.41, volume: 1500000, marketCap: 495000, dayHigh: 3620, dayLow: 3530 },
    { symbol: "TATAMOTORS", company: "Tata Motors", sector: "Automobile", ltp: 680, previousClose: 700, changePercent: -2.86, volume: 11500000, marketCap: 250000, dayHigh: 705, dayLow: 670 }
];

// console.log(marketData[0]); // Output: RELIANCE

// let mappedData = marketData.map((Stock) => {
  
//           return {
//         Name: Stock.symbol, 
//         LastPrice: Stock.ltp,
//         Volume: Stock.volume,
//     };
// })
// console.log(mappedData);

// let positiveChangeStocks = marketData.filter((Stock) => {
//     return Stock.sector === "Banking";
// });
// console.log(positiveChangeStocks);


// let price = 100;
// let quantity = 5;

// console.log("Price is " + price + "The Quantity is" + quantity);
//  let output = `Price is ${price} and the Quantity is ${quantity}`;
//  console.log(output);


// let addition = (num1,num2) =>{ return num1+num2; }

// let result = addition(5,10);
// console.log(result);


// function multiply(num1,num2){
//     return num1 * num2;csl
// }

// let multiply2 = (num1,num2) => { return num1 * num2; };

// let arr = [1,2,3,4,5];
// // arr.slice(1,5); // [2,3]
// console.log(arr.slice(1,5)); // [2,3,4,5]



// function greet(name){
//     console.log(`Hello ${name}`);
// }

// function processUserInput(callback){
   
//     callback("Akash");
// }

// processUserInput(greet);



// function getCustomer(callback) {

//     setTimeout(() => {
//         console.log("Customer details fetched");

//         callback();
//     }, 1000);

// }

// function checkProduct(callback) {

//     setTimeout(() => {
//         console.log("Product available");

//         callback();
//     }, 1000);

// }

// function processPayment(callback) {

//     setTimeout(() => {
//         console.log("Payment successful");

//         callback();
//     }, 1000);

// }

// function createOrder(callback) {

//     setTimeout(() => {
//         console.log("Order created");

//         callback();
//     }, 1000);

// }

// function sendEmail() {

//     console.log("Confirmation email sent");

// }



// getCustomer(() => {

//     checkProduct(() => {

//         processPayment(() => {

//             createOrder(() => {

//                 sendEmail();

//             });

//         });

//     });

// });

// console.log("Step 1 : Fetching customer details"); //

// setTimeout(() => {
//     console.log("Step 2 : Show Products");  
// }, 1000); // callback queue

// setTimeout(() => {
//     console.log("Step 5 : Show Products");  
// }, 1000); // callback queue

// console.log("Step 3 : Process Payment");


// let orderPromise =  new Promise((resolve,reject) => {
//     let orderStatus = false;

//     if(orderStatus){
//         resolve("Order Placed Successfully");
//     }
//     else{
//         reject("Order Failed");
//     }
// });

// orderPromise
//   .then((message) => {
//     console.log(message);
//   })
//   .catch((error) => {
//     console.log(error);
//   });


// function studentRegistration(name, age, email) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (name && age && email) {
//                 resolve(`Student ${name} registered successfully`);
//             } else {
//                 reject("Registration failed: Missing required fields");
//             }
//         }, 1000);

// })}

// function showProfile() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (true) {
//                 resolve("Profile Fetched");
//             } else {
//                 reject("Failed");
//             }
//         }, 1000);

// })}


// studentRegistration(20,"dev@gmail.com")
// .then((message)=>{
//     console.log(message);
//    return showProfile();
// })
// .then((message)=>{
//     console.log(message);
// })
// .catch((error)=>{
//     console.log(error)
// })




function registerUser (){
   setTimeout(()=>{
     console.log("User register");
   },1000)
}

function Showdashboard (){
   
    setTimeout(()=>{
      console.log("Dashboard fetched");
   },1000)
}
function showCourseDetails (){
    console.log("CourseDetail fetched");
}

async function runTask(){
    await registerUser();
  await  Showdashboard();
   await showCourseDetails();
}
runTask();



