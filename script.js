let para = document.getElementById("contenido");
para.style.border = "black 2px solid";
para.innerHTML = "<h1>Bienvenido a los consejos CarKikos</h1>";
para.style.padding = "10px";

// Creamos el botón
Button = document.createElement("button");
Button.setAttribute("id", "boton");
Button.innerHTML = "Click para ver los consejos";
para.appendChild(Button);


typeText = function(titulo, texto) {
    let consejoDiv = document.createElement("div");
    consejoDiv.style.display = "inline-block";
    consejoDiv.style.margin = "10px";
    consejoDiv.style.textAlign = "center";
    consejoDiv.style.border = "solid blue 2px";
    consejoDiv.style.padding = "20px";
    consejoDiv.style.width = "300px";
    consejoDiv.style.verticalAlign = "top";
    consejoDiv.style.overflow = "hidden";
    consejoDiv.style.wordWrap = "break-word";
    consejoDiv.style.whiteSpace = "normal";
    
    let tituloElem = document.createElement("h3");
    tituloElem.innerHTML = titulo;
    tituloElem.style.marginBottom = "10px";
    
    let textoElem = document.createElement("p");
    textoElem.innerHTML = texto;
    textoElem.style.fontSize = "14px";
    textoElem.style.wordWrap = "break-word";
    textoElem.style.overflowWrap = "break-word";
    textoElem.style.whiteSpace = "normal";
    
    consejoDiv.appendChild(tituloElem);
    consejoDiv.appendChild(textoElem);
    
    return consejoDiv;
};

// Contenedor principal en línea
let consejosContainer = document.createElement("div");
consejosContainer.style.display = "none";
consejosContainer.style.whiteSpace = "nowrap";
consejosContainer.style.width = "100%";
consejosContainer.style.overflowX = "auto";
para.appendChild(consejosContainer);

// Agregamos los consejos
Button.addEventListener("click", function() {
    if (consejosContainer.style.display === "none") {
        consejosContainer.innerHTML = ""; // Limpiar antes de agregar
        consejosContainer.appendChild(typeText(
            "Consejo 1: Dado por Carlos",
            "Ser responsable con las tareas y entregar un trabajo excelente. No dejen las tareas de IT para el final, busquen tomarse su tiempo y aprender en cada una de estas."
        ));
        consejosContainer.appendChild(typeText(
            "Consejo 2: Dado por Leo",
            "Hacer ejercicios de HackerRank para mejorar la lógica y descubrir más sobre cada lenguaje de programación."
        ));
        consejosContainer.appendChild(typeText(
            "Consejo 3: Dado por Kike",
            "Prestar atención en cada clase, los consejos del teacher son oro. Desde mi experiencia, estos consejos han sido muy valiosos."
        ));
        consejosContainer.appendChild(typeText(
            "Consejos 4: Dado por Ashly",
            "Cada clase ha sido un reto, desde actividades recreativas hasta temas dificles de entender. He aprendido que todo es posible si te esfuerzas y lo haces con amor (enamórense de la progrmación y verán que todo se hace más fácil)."
        ));
        consejosContainer.appendChild(typeText(
            "Consejos 5: Dado por Lissie",
            "Teacher Irving me ha enseñado a buscar soluciones de manera rápida y eficiente, esto mediante cada uno de los ejercicos que desarrollamos en clase (no hablen en clase, se preserán de muchos buenos consejos)."
        ));
        consejosContainer.appendChild(typeText(
            "Consejos 6: Dado por Debora",
            "Si quieren ser buenos progrmadores/as apéguense a las buenas prácticas. Al comienzo puede que sea dfícil , pero en el futuro verán sus frutos."
        ));
        consejosContainer.appendChild(typeText(
            "Consejos 7: Dado por Daniela",
            "Las clases son como una cosecha de ahuacates, si te descuidas se caerá el ahuacate y ya no podrás disfrutarlo. Lo mismo pasa con las clases, si te descuidas de algo, habrás desaprovechado una gran oportunidad de aprender."
        ));
        consejosContainer.appendChild(typeText(
            "Consejos 8: Dado por Danilo",
            "Si la vida te da un teacher como teacher Irving, trata de disfrutarlo y aprender todo lo que puedas de él."
        ));
        consejosContainer.appendChild(typeText(
            "Consejos 9: Dado por Gerar",
            "Nunca dejen de practicar IT, es fundamental para ser un buen programador la práctica y la investigación de nuevos temas."
        ));
        consejosContainer.appendChild(typeText(
            "Consejos 10: Dado por Mateo",
            "Si miran la programación como un hobbie, jamás tendrán que preocuparse por el estreés."
        ));
        consejosContainer.style.display = "block";
    } else {
        consejosContainer.style.display = "none";
    }
});
