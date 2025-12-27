
let box  = document.querySelector(".box")

// box.addEventListener("click" ,(event)=>{

//     console.log(event.target)    

// })

// const greet = ()=>{

//     alert("hello how are you ! " )

// }

// box.addEventListener("dblclick",greet)

// box.addEventListener("mouseenter" , ()=>{

//     alert("mouse entered !")

// })

// box.addEventListener("mouseleave" , ()=>{

//     alert("mouse leaved !")
    
// })

// box.addEventListener("mousemove", ()=>{
//     alert("hello")
// })


// document.body.addEventListener("mousemove" , (e)=>{

//     let dot  = document.createElement("div")
//     dot.classList.add("box")
//     dot.style.top = e.clientY + "px"
//     dot.style.left = e.clientX + "px"
//     document.body.appendChild(dot)
// })


// let input = document.querySelector("#input")

// input.addEventListener("keydown" , (e)=>{

//     if(e.key == "Enter"){
//         window.location.href = "test.html"
//     }
    

// })


// let forms = document.querySelector("#from")

// forms.addEventListener("submit" ,(e)=>{
//     e.preventDefault()
//     alert("from was submited")
// })


// let sname = document.querySelector("#name")

// sname.addEventListener("change", (e)=>{

//     console.log(e.target.value)
// })



let text = document.querySelector("#name")

text.addEventListener("focus" ,()=>{
    console.log("you focused on field")
})


text.addEventListener("blur" , ()=>{
    console.log("you loose the foucs from field")
})