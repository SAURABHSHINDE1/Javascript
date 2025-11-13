// var a = 10

// console.log("The Value of a is: "+ a)

// let b = 20
// console.log("The Value of b is: "+ b)

// const c = 30
// console.log("The Value of c is: "+ c)


// var 
// 1 var is a function scoped variable
// 2 can be re-declared / re intialized
// 3 can be updated


//     var a = 10

// function add (){

// console.log("Inside Function Value of a is: "+ a)

    
// }
// add()

// console.log("Outside Function Value of a is: "+ a) 


// var a = 10 

// console.log(a)

// a = "om"

// console.log(a)



// Es6 Variables

// let
// 1 let is a block scoped variable
// 2 cannot be re-declared
// 3 can be updated


// function add(){
//     // block scope
//     let a = 10
//     console.log("Inside Function Value of a is: "+ a)
// }

// add()
// console.log("Outside Function Value of a is: "+ a)

// for(let i=0; i<5; i++){
//     console.log(i)
// }

// let a = 10 


//  a = 20

//  console.log(a)


// const
// 1 const is a block scoped variable
// 2 cannot be re-declared
// 3 cannot be updated
// const a = 55

// console.log(a)

//  a = 77

// console.log(a)


// js datatypes 
// 1 primitive datatypes
// number
// string
// boolean
// undefined
// null
// symbol
// bigint

// 2 non-primitive datatypes / reference datatypes


// let num = 34
// console.log(typeof num)

// let sname = "Omkar"
// // console.log(typeof sname)
// console.log(sname)


// let data = false
// console.log(typeof data)


// let age
// console.log(typeof age)

// let data = null
// console.log(data)

// var symbol1 = Symbol("id1")

// var symbol2 = Symbol("id1")

// console.log(symbol1 === symbol2)


// let data = 988976896845n
// console.log(typeof data)


// non-primitive datatypes / reference datatypes

// 1 Object
// 2 Array
// 3 Function

// Object

// let userData = {
//     userName: "saurabh",
//     Age:20,
//     Address:"loni",
//     mobileNo:23456789
// }

// // console.log(userData)
// console.log(userData.userName)
// console.log(userData.Age)
// console.log(userData.Address)
// console.log(userData.mobileNo)


// Array
// array is an ordered collection of elements

// let arr = [10,20,30,40,50,"omkar",true]

// console.log(arr.length)

// for(let i = 0 ; i < arr.length; i++){

//     console.log(arr[i])

// }


// Function

// function greet(){
//     console.log("hello user")
// }

// greet()


let body = document.querySelector("body")

for(let i = 1; i <= 1000; i++){
    let box  = document.createElement("div")
    box.className="box"
    box.textContent = i
    body.appendChild(box)
}