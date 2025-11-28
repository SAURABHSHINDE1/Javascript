 let arr = [20,45,67,78,99,42,99,88,12,90]

//  push pop

arr.push(66,23,41)

arr.pop()


console.log(arr)


arr.unshift(56,30)

arr.shift()

arr.splice(5,2 ,55,67,88)

let data  = arr.slice(2,8)

console.log(data)


let index = arr.indexOf(55)

console.log(index)

let index2 = arr.lastIndexOf(55)

console.log(index2)



 let result1 = arr.includes(55)

 console.log(result1)

let mobiles = [
  {
    brand: "Samsung",
    model: "Galaxy S23",
    price: 74999,
    storage: "1TB",
    color: "Black"
  },
  {
    brand: "Apple",
    model: "iPhone 15",
    price: 79999,
    storage: "128GB",
    color: "Blue"
  },
  {
    brand: "OnePlus",
    model: "OnePlus 11",
    price: 56999,
    storage: "256GB",
    color: "Green"
  },
  {
    brand: "Xiaomi",
    model: "Redmi Note 12",
    price: 14999,
    storage: "128GB",
    color: "Silver"
  },
  {
    brand: "Realme",
    model: "Realme GT Neo 3",
    price: 32999,
    storage: "128GB",
    color: "White"
  },
  {
    brand: "Vivo",
    model: "Vivo V29",
    price: 32999,
    storage: "256GB",
    color: "Black"
  },
  {
    brand: "Oppo",
    model: "Oppo Reno 10",
    price: 37999,
    storage: "256GB",
    color: "Purple"
  },
  {
    brand: "Google",
    model: "Pixel 8",
    price: 59999,
    storage: "128GB",
    color: "Obsidian"
  },
  {
    brand: "Motorola",
    model: "Moto Edge 40",
    price: 29999,
    storage: "256GB",
    color: "Black"
  },
  {
    brand: "Nothing",
    model: "Phone 2",
    price: 44999,
    storage: "256GB",
    color: "White"
  }
];





mobiles.forEach((currelem ,index)=>{

     console.log(`${index+1} :- ${currelem.model}: Price: ${currelem.price}`)

     console.log(`Colour:-${currelem.color}`)

})


console.log(mobiles)



let updatedData = mobiles.map((currelem , index)=>{
    return {

        newBrand: currelem.brand,
        newModel : currelem.model,
        newPrice : currelem.price + 2000,
        newStorage: currelem.storage + " 1 Year warranty",
        newColor: currelem.color

    }
})

console.log(updatedData)




let result = mobiles.filter((currelem)=> currelem.storage ==="1TB" )

console.log(result)