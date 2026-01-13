let form = document.querySelector("#form");
let button = document.querySelector("button");
let checkbox = document.querySelector("#checkbox");
let email = document.querySelector("#email");
let password = document.querySelector("#password");

email.addEventListener("change", (event)=>{
    if(email.value!=="" && password.value!=="" && checkbox.value==="on"){
        button.disabled = !checkbox.checked; //trouvé sur la doc mdn   
    }
    else if(email.value.trim==="" || password.value.trim!=="" || checkbox.value==="off"){
        button.disabled=true;//trouvé sur la doc mdn 
    }
});

password.addEventListener("change", (event)=>{
    if(email.value!=="" && password.value!=="" && checkbox.value==="on"){
        button.disabled = !checkbox.checked; //trouvé sur la doc mdn   
    }
    else if(email.value.trim==="" || password.value.trim!=="" || checkbox.value==="off"){
        button.disabled=true;//trouvé sur la doc mdn 
    }
});

checkbox.addEventListener("change", (event)=>{
    if(email.value!=="" && password.value!=="" && checkbox.value==="on"){
        button.disabled = !event.target.checked; //trouvé sur la doc mdn   
    }
    else if(email.value.trim==="" || password.value.trim!=="" || checkbox.value==="off"){
        button.disabled=true;//trouvé sur la doc mdn 
    }
    console.log(checkbox.value)
});

form.addEventListener("submit", (event)=>{
    event.preventDefault();
    
    console.log(event.target.elements.email.value);
    console.log(event.target.elements.password.value);
    console.log(event.target.elements.message.value);

    // event.target.submit();
});

