let form = document.querySelector("#form");
let div = document.querySelector("div");
let username = document.querySelector("#username");
let color = document.querySelector("#color");

form.addEventListener("submit", (event)=>{
    event.preventDefault();
    
    console.log(event.target.elements.username.value);
    console.log(event.target.elements.color.value);
    
    event.target.submit();
});

username.addEventListener("change", (event)=>{
    let p = document.createElement("p");
    div.appendChild(p);
    
    let divP = document.querySelector("div p");
    divP.textContent = username.value;
});

color.addEventListener("change", (event)=>{
    div.style.backgroundColor = color.value;
});