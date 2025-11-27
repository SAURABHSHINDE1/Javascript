// const students = [
//   { 
//     id: 1, 
//     name: "Rahul Sharma", 
//     age: 20, 
//     marks: 85, 
//     course: "BCA",
//     email: "rahul.sharma@example.com",
//     address: "Pune, Maharashtra"
//   },
//   { 
//     id: 2, 
//     name: "Priya Singh", 
//     age: 19, 
//     marks: 92, 
//     course: "BBA",
//     email: "priya.singh@example.com",
//     address: "Mumbai, Maharashtra"
//   },
//   { 
//     id: 3, 
//     name: "Aman Verma", 
//     age: 21, 
//     marks: 76, 
//     course: "BCS",
//     email: "aman.verma@example.com",
//     address: "Nashik, Maharashtra"
//   },
//   { 
//     id: 4, 
//     name: "Sneha Patil", 
//     age: 20, 
//     marks: 88, 
//     course: "BCA",
//     email: "sneha.patil@example.com",
//     address: "Kolhapur, Maharashtra"
//   },
//   { 
//     id: 5, 
//     name: "Rohit Deshmukh", 
//     age: 22, 
//     marks: 67, 
//     course: "BA",
//     email: "rohit.deshmukh@example.com",
//     address: "Aurangabad, Maharashtra"
//   },
//   { 
//     id: 6, 
//     name: "Kavita More", 
//     age: 19, 
//     marks: 94, 
//     course: "BSc",
//     email: "kavita.more@example.com",
//     address: "Nagpur, Maharashtra"
//   },
//   { 
//     id: 7, 
//     name: "Sagar Kulkarni", 
//     age: 21, 
//     marks: 72, 
//     course: "BCom",
//     email: "sagar.kulkarni@example.com",
//     address: "Solapur, Maharashtra"
//   },
//   { 
//     id: 8, 
//     name: "Pooja Lokhande", 
//     age: 20, 
//     marks: 89, 
//     course: "BCA",
//     email: "pooja.lokhande@example.com",
//     address: "Satara, Maharashtra"
//   },
//   { 
//     id: 9, 
//     name: "Nikhil Jadhav", 
//     age: 22, 
//     marks: 81, 
//     course: "BSc",
//     email: "nikhil.jadhav@example.com",
//     address: "Thane, Maharashtra"
//   },
//   { 
//     id: 10, 
//     name: "Ankita Pawar", 
//     age: 19, 
//     marks: 97, 
//     course: "BBA",
//     email: "ankita.pawar@example.com",
//     address: "Sangli, Maharashtra"
//   }
// ];

// let body = document.querySelector("body")

// students.forEach((elem)=>{

//     let card = document.createElement("div")
//     card.className ="card"
//     body.appendChild(card)

//     let sname = document.createElement("h1")
//     sname.textContent = `Name: ${elem.name}`
//     card.appendChild(sname)

//     let Age = document.createElement("h2")
//     Age.textContent = `Age : ${elem.age}`
//     card.appendChild(Age)


//     let marks = document.createElement("h2")
//     marks.textContent = `Marks : ${elem.marks}`
//     card.appendChild(marks)

//     let course = document.createElement("h2")
//     course.textContent= `Course : ${elem.course}`
//     card.appendChild(course)


//     let Email = document.createElement("h2")
//     Email.textContent = `Email : ${elem.email}`
//     card.appendChild(Email)

//     let Address = document.createElement("h2")
//     Address.textContent = `Address : ${elem.address}`   
//     card.appendChild(Address)

// })  

let data = [
  {
    name: "abc",
    Age: 20,
    Address: "Mumbai",
    Email: "abc@gmail.com"
  },
  {
    name: "Rahul",
    Age: 22,
    Address: "Pune",
    Email: "rahul22@gmail.com"
  },
  {
    name: "Sneha",
    Age: 19,
    Address: "Nashik",
    Email: "sneha19@gmail.com"
  },
  {
    name: "Rohit",
    Age: 21,
    Address: "Nagpur",
    Email: "rohit21@gmail.com"
  },
  {
    name: "Pooja",
    Age: 20,
    Address: "Thane",
    Email: "pooja20@gmail.com"
  },
  {
    name: "Aman",
    Age: 23,
    Address: "Satara",
    Email: "aman23@gmail.com"
  },
  {
    name: "Kavita",
    Age: 18,
    Address: "Kolhapur",
    Email: "kavita18@gmail.com"
  },
  {
    name: "Nikhil",
    Age: 22,
    Address: "Aurangabad",
    Email: "nikhil22@gmail.com"
  },
  {
    name: "Priya",
    Age: 20,
    Address: "Solapur",
    Email: "priya20@gmail.com"
  },
  {
    name: "Sagar",
    Age: 24,
    Address: "Sangli",
    Email: "sagar24@gmail.com"
  }
];



for(let i =0 ; i < data.length; i++){

    
let body = document.querySelector("body")

let box = document.createElement("div")
box.className = "box"
body.appendChild(box)

let heading = document.createElement("h1")
heading.textContent = `Name : ${data[i].name}`
box.appendChild(heading)


let age = document.createElement("h2")
age.textContent = `Age : ${data[i].Age}`
box.appendChild(age)

let address = document.createElement("h2")
address.textContent = `Address : ${data[i].Address}`
box.appendChild(address)

let email = document.createElement("h2")
email.textContent= `Email : ${data[i].Email}`
box.appendChild(email)

}