
// function greet(name ,callback){

//     console.log(`hello ${name}`)

//     callback()

// }

// greet("sakshi" , ()=>{

//     console.log("welcome to js ")

// })

// greet("saurabh" , ()=>{

//     console.log("welcome to js ")


function data(callback){

        callback()

}


// data(()=>{

//     console.log("Data first recived");

//     setTimeout(()=>{

//         data(()=>{

//             console.log("Data second recived")

//             setTimeout(()=>{

//                 data(()=>{

//                     console.log("Data third recived")

//                     setTimeout(()=>{

//                         data(()=>{
//                             console.log("shevti data bhetala !!!")
//                         })
                        
//                     },2000)

//                 })

//             },2000)

//         })

//     },2000)


// })



// setTimeout(()=>{

//     console.log("data 1st recived");

//     setTimeout(()=>{

//          console.log("data 2nd recived")

//          setTimeout(()=>{

//              console.log("data 3rd recived")

//              setTimeout(()=>{

//                  console.log("data 4th recived")

//              },2000)

//          },2000)

//     },2000)

// },2000)