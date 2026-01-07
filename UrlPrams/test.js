let result = new URLSearchParams(window.location.search)

let  sname = result.get("name")

let id= result.get("id")

let h1 = document.querySelector("h1")

h1.textContent= `Hello ${sname} id:-${id}`