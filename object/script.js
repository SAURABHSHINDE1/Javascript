
let user ={
    name:"om",
    age:20,
    address:"loni",
    mobileNo:23456789,
    bloodG:"b+",
    collage:"pvp",
    Email:"om78@gmail.com"
}


for( let key in user){

    console.log(key+":-"+user[key])

}




let keys = Object.keys(user)

// console.log(keys)


let values = Object.values(user)

// console.log(values)

let entries =Object.entries(user)

// console.log(entries)

Object.seal(user)

// user.name1="saurabh" 

// console.log(user)


Object.freeze(user)

// user.name = "xyz"

// console.log(user)