const form = document.querySelector("#form");
const inputElement = document.querySelector("#input");
const todos = document.querySelector("#todos");

form.addEventListener("submit", (e) => {
    e.preventDefault()
    addTodo()
})

function addTodo() {
    
    inputValue = inputElement.value

    if(inputValue){
        const listElement = document.createElement("li")
        listElement.innerText = inputValue
        todos.appendChild(listElement)
        inputElement.value = ""

        listElement.addEventListener("click", () => {
            listElement.classList.toggle("completed")
        })

        listElement.addEventListener("contextmenu",(e)=>{
            e.preventDefault();
            listElement.remove();

        });

    }
}