
// localStorage.setItem("name" , "saurabh");

// // localStorage.clear();

// // localStorage.removeItem("name");

// let name = localStorage.getItem("name");

// console.log(name);



    let task =[]

     
const addtask =()=>{
      let value = document.querySelector("#input")
  
   localStorage.setItem("Task", JSON.stringify(task))

}

let btn = document.querySelector("button")
btn.addEventListener("click" ,()=>{
    addtask()
})

// localStorage.clear()