let title = document.getElementById("HTag");


title.style.color = "red";
title.style.fontSize = "50px";
title.style.backgroundColor = "blue";

let ptag = document.querySelector(".pTag");

ptag.style.color = "green";
ptag.style.fontSize ="35px";


let boxSelect = document.getElementById("box");
let newElement = document.createElement("h1");
newElement.innerHTML = "This new Element got added";

boxSelect.append(newElement)
// newElement.remove();


let btn  = document.getElementById("btn");
let cart = document.getElementById("cart");
let count =0;

btn.addEventListener("click",function(){
    // ptag.style.color = "red";
    // ptag.style.backgroundColor ="lightblue";
    // ptag.style.fontSize ="50px";
    count++;
    cart.textContent = `count ${count}`;
    
})










 