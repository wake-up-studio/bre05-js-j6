let todos = [];
let add = document.querySelector("#add-btn");
let ul = document.querySelector("#todo-list");
let toDoInput = document.querySelector("#todo-input");
let supp = document.querySelector("delete-btn");
let li = document.querySelector(("ul li"))

function setTodos (todos){
    todos.push[""]
}

function addTodosText(todos)
{
    for(let i = 0; i < todos.length; i++) // je parcours le tableau de chaines de caracteres
    {
        if(todos[i] !== "")
        {
            let lis = document.querySelector(li[i]); // je selectionne la bonne boite
            lis.innerHTML = "";
            let textLi = document.createTextNode(toDoInput.value); // je mets la chaine de caractere dans la boite
            lis.appendChild(textLi);
        }
    }
}

function setLi (ul){
    let li = document.createElement("li");
    ul.appendChild(li);
    li.classList.add("todo-item");
    
    let input = document.createElement("input");
    let span = document.createElement("span");
    let button = document.createElement("button");
    
    let spanText = document.createTextNode(toDoInput.value);
    span.appendChild(spanText);
    let buttonText = document.createTextNode("supprimer");
    button.appendChild(buttonText);
    
    li.appendChild(input);
    li.appendChild(span);
    li.appendChild(button);
    
    input.setAttribute("type", "checkbox");
    input.classList.add("todo-checkbox");
    
    span.classList.add("todo-text");
    
    button.classList.add("delete-btn");
}

window.addEventListener('DOMContentLoaded', () => {
    
    add.addEventListener("click", (event)=>{
        event.preventDefault();
        addTodosText(todos);
        setLi();
        console.log(todos);
    });
});