// Selecionar elemente
var title = document.querySelector("#title");

// innerHTML
title.innerHTML = "Testando o texto alterado!";

// textContent -> Mais ultilizado, recomendado e performático
var subtitle = document.querySelector(".subtitle");

subtitle.textContent = "Testando o textContent";