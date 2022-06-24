const buttons = document.querySelectorAll(".btn")
const value = document.querySelector(".number")

let count = 0

buttons.forEach(element => {

    element.addEventListener("click", (e) => {

        btn = e.currentTarget.classList
        // console.log(btn)

        if(btn.contains("increase")){
            count++
        }else if(btn.contains("decrease")){
            count--
        }else{
            count = 0
        }

        if(count < 0){
            value.style.color = "red"
        }else if(count > 0){
            value.style.color = "green"
        }else{
            value.style.color = "whitesmoke"
        }

        value.innerText= count

    })
});