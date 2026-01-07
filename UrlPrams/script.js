
let btn = document.querySelector("button")

let sname = 'saurabh'
let id = 101
btn.addEventListener("click" , ()=>{

    window.location.href=`test.html?name=${sname}&id=${id}`
})