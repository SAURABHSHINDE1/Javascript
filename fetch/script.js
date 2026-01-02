


fetch('https://jsonplaceholder.typicode.com/posts')

.then((response)=>response.json())

.then((data)=>{

    let body = document.querySelector("body")

    data.forEach((elem)=>{
        console.log(elem)

        let div = document.createElement("div")
        div.classList.add("box")
        body.append(div)

        let id = document.createElement("h2")
        id.textContent = `ID : ${elem.id}`
        div.appendChild(id)

          let title = document.createElement("h2")
        title.textContent = `title : ${elem.title}`
        div.appendChild(title)

        let Body = document.createElement("h2")
        Body.textContent = `Body : ${elem.body}`
        div.appendChild(Body)


    })

})
