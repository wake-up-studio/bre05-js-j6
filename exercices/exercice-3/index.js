let form = document.querySelector("#form");
let username = document.querySelector("#username")
let password = document.querySelector("#password")
let textarea = document.querySelector("#textarea")

form.addEventListener("submit", (event)=>{
    event.preventDefault();
    
    console.log(event.target.elements.username.value);
    console.log(event.target.elements.password.value);
    
    event.target.submit();
});

username.addEventListener("change", (event)=>{
    console.log(event.target.value);
});

password.addEventListener("change", (event)=>{
    console.log(event.target.value);
});

textarea.addEventListener("change", (event)=>{
    console.log(event.target.value);
});