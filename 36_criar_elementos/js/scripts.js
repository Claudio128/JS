var novoParagrafo = document.createElement("p");

var texto = document.createTextNode("Este é o conteúdo do paragráfo");

novoParagrafo.appendChild(texto);
console.log(novoParagrafo);

var body = document.querySelector("body");
body.appendChild(novoParagrafo);

// Inserindo em um container

var container = document.querySelector("#container");
console.log(container);

var el = document.createElement("span");
el.appendChild(document.createTextNode("Texto do span"));

console.log(el);
container.appendChild(el);