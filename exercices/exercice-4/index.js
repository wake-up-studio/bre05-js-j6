let form = document.querySelector("#signup-form");

form.addEventListener("submit", (event)=>{
    event.preventDefault();
    let password = document.querySelector("#password");
    let confirmPassword = document.querySelector("#confirm_password");
    
    if(password.value===confirmPassword.value){
        password.classList.add("valid");
        confirmPassword.classList.add("valid");
        event.target.submit();
    }
    else{
        password.classList.add("invalid");
        confirmPassword.classList.add("invalid");
    }
    
    console.log(event.target.elements.password.value);
    console.log(event.target.elements.confirm_password.value);
});