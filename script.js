let para = document.getElementById("contenido");
para.style.border = "black 2px solid";
para.innerHTML = "<h1>Bienvenido a los consejos CarKikos</h1>";
para.style.padding = "10px";

// Creación del botón
let Button = document.createElement("button");
Button.setAttribute("id", "boton");
Button.innerHTML = "Click para ver los consejos";
para.appendChild(Button);

function typeText(titulo, texto) {
    let consejoDiv = document.createElement("div");
    consejoDiv.style.border = "solid blue 2px";
    consejoDiv.style.padding = "20px";
    consejoDiv.style.width = "300px";
    consejoDiv.style.textAlign = "center";
    
    let tituloElem = document.createElement("h3");
    tituloElem.innerHTML = titulo;
    
    let textoElem = document.createElement("p");
    textoElem.innerHTML = texto;
    textoElem.style.fontSize = "14px";

    consejoDiv.appendChild(tituloElem);
    consejoDiv.appendChild(textoElem);
    
    return consejoDiv;
}

// Contenedor de los consejos en filas de 3
let consejosContainer = document.createElement("div");
consejosContainer.style.display = "none";
consejosContainer.style.gridTemplateColumns = "repeat(3, 1fr)"; 
consejosContainer.style.gap = "20px";
consejosContainer.style.marginTop = "20px";

para.appendChild(consejosContainer);

// Agregar consejos al hacer click
Button.addEventListener("click", function() {
    if (consejosContainer.style.display === "none") {
        consejosContainer.innerHTML = "";
        let consejos = [
            ["Consejo 1: Dado por Carlos", "Seran responsable con las tareas y entreguen un trabajo excelente."],
            ["Consejo 2: Dado por Leo", "Hagan ejercicios de HackerRank para mejorar la lógica."],
            ["Consejo 3: Dado por Kike", "Presten atención en cada clase, los consejos del teacher son oro."],
            ["Consejo 4: Dado por Ashly", "Si te esfuerzas y lo haces con amor, todo es posible."],
            ["Consejo 5: Dado por Lissie", "Aprender a buscar soluciones de manera rápida y eficiente."],
            ["Consejo 6: Dado por Debora", "Apéguense a las buenas prácticas desde el inicio."],
            ["Consejo 7: Dado por Daniela", "Las clases son como aguacates, si te descuidas, se pierden."],
            ["Consejo 8: Dado por Danilo", "Si la vida te da un teacher como Irving, aprende todo lo posible."],
            ["Consejo 9: Dado por Gerar", "La práctica y la investigación son clave para mejorar."],
            ["Consejo 10: Dado por Mateo", "Si ves la programación como un hobby, nunca te estresará."]
        ];
        
        consejos.forEach(([titulo, texto]) => {
            consejosContainer.appendChild(typeText(titulo, texto));
        });

        consejosContainer.style.display = "grid";
        Button.innerHTML = "Esconder los consejos"; 
    } else {
        consejosContainer.style.display = "none";
        Button.innerHTML = "Click para ver los consejos"; 
    }
});
