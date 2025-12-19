

 async function getdata(){

    let response = await fetch(`https://jsonplaceholder.typicode.com/posts`)

    let data = await response.json()

    console.log(data)

    let body = document.querySelector("body")

    data.forEach((elem)=> {
        
        let id = document.createElement("h2")
        id.textContent = `ID : ${elem.id}`
        body.appendChild(id)

        let title = document.createElement("h2")
        title.textContent = `Title : ${elem.title}`
        body.appendChild(title)

        let body1 = document.createElement("h2")
        body1.textContent = `Body : ${elem.body}`
        body.appendChild(body1)
    });
    

}


getdata()

