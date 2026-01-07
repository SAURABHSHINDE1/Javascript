// const getdata = ()=>{

//     let isData = false

//     let arr = [{name:"abc" , age:23}]

//     return new Promise((resolve , reject)=>{

//         if(isData){
//             resolve(arr)
//         }
//         else{
//             reject("some errr")
//         }

//     })

// }

getdata()

.then((data)=>console.log(data))

.catch((err)=>console.log("Error", err))