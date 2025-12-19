// let heading = document.querySelector("h1")

// console.log(heading)

// let data = "hello DreamsGuider welcome to all"

// // heading.textContent= data

// // heading.innerText = data

// heading.innerHTML =` <p> ${data}</p> `

let body = document.querySelector("body")

let box = document.createElement("div")
box.className = "box"
body.appendChild(box)

let  sname = document.createElement("h1")
sname .textContent = "Name : abc"
box.appendChild(sname)

let address = document.createElement("h2")
address.innerText = "Address : Pune"
box.appendChild(address)

let mobile = document.createElement("h2")
mobile.textContent = "Phone : 3456754327"
box.appendChild(mobile)


let email = document.createElement("h2")
email.textContent= "Email : abc@gmail.com"
box.appendChild(email)

let B_group = document.createElement("h2")
B_group.innerText = "Blood Group : B+"
box.appendChild(B_group)