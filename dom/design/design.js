let mobileData ={

    img: "img2.jpg",
    model_name: "iPhone 13 Pro 256 gb Black colour",
    price: "$999",
    features: "5G connectivity A15 Bionic chip",
    offers: "Free shipping 1-year warranty"

}


let container = document.querySelector(".container")


let card = document.createElement("div")
card.className = "card"
container.appendChild(card)

let img_div = document.createElement("div")
img_div.className = "img-div"
card.appendChild(img_div)

let mobile_img = document.createElement("img")
mobile_img.src = mobileData.img
img_div.appendChild(mobile_img)

let info = document.createElement("div")
info.className = "info"
card.appendChild(info)

let mobile_name = document.createElement("h1")
mobile_name.textContent = mobileData.model_name
info.appendChild(mobile_name)

let price = document.createElement("h2")
price.textContent = mobileData.price
info.appendChild(price)

let more_info = document.createElement("h3")
more_info.innerText = mobileData.features
info.appendChild(more_info)

let m_Offer = document.createElement("h3")
m_Offer.innerText = mobileData.offers
info.appendChild(m_Offer)

let btn = document.createElement("button")
btn.textContent = "Buy Now"
info.appendChild(btn)