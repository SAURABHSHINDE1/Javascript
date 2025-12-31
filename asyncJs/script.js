


// console.log("hello first")

// console.log("hello second")

// setTimeout(()=>{

// }, 2000)

// console.log("hello fifth")

// console.log("hello sixth")

// let box  = document.querySelector(".box")

// setTimeout(()=>{
// box.style.display = "none"


// }, 8000)


// setInterval(()=>{

//     console.log("hello")

// } , 2000)



// dates


// let dates = new  Date()

// let localdate = dates.toLocaleDateString()

// console.log(localdate)

// // to get the current day

// let day = dates.getDate()
// console.log(day)

// let month = dates.getMonth()
// console.log(month+1)

// let year = dates.getFullYear()
// console.log(year)

// console.log(`${day}/${month+1}/${year}`)



// setInterval(()=>{

// let dates = new  Date()

// let time = dates.toLocaleTimeString()

// let heading  = document.querySelector("h1")

// heading.textContent = time

// },1000)



let dates  = new Date()

// to get a current date  global formate

let localDate = dates.toLocaleDateString()

console.log(localDate)

// current  day
let day = dates.getDate()
console.log(day)

// current month
let month = dates.getMonth() + 1
console.log(month)

// get current year
let year = dates.getFullYear()
console.log(year)

console.log(`${day}/${month}/${year}`)

let heading = document.querySelector("h1")
heading.textContent =` Date :-${day}/${month}/${year}`


setInterval(()=>{

    let newdate =new Date()
    
let time = newdate.toLocaleTimeString()

let localtime  = document.querySelector("h2")
localtime.textContent = time

},1000)