let btns=document.querySelectorAll(".btn")


let i=document.querySelector(".fa-x")


i.addEventListener("click",()=>{
    btns[1].classList.toggle("none")
    btns[1].classList.toggle("none")
})
btns[1],addEventListener("click",()=>{
    btns[0].classList.toggle("none")
    btns[1].classList.toggle("none")
})