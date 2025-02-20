let para = document.getElementById("contenido");
para.innerHTML = "hola <br>"

let button = document.createElement("button");
button.setAttribute("id", "botón");
button.innerHTML = "Click para ver los consejos "


para.appendChild(button)

let div1 = document.createElement("div");
let hh1 = document.createElement("h3");
let pp = document.createElement("p");
hh1.innerHTML = "Consejo 1:"
pp.innerHTML = ""
