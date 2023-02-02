// toLowerCase e toUpperCase

var frase = "Eu sou a Lenda";

var fraseCaixaAlta = frase.toUpperCase();

console.log(fraseCaixaAlta);

console.log(frase.toLowerCase());

// trim

var nome = "               Claudio        "

var nomeTrim = nome.trim();

console.log(nome);
console.log(nomeTrim);

// split

console.log(frase.split(" "));

var tags = "PHP, JavaScript, HTML, CSS";

console.log(tags.split(", "));

// lastIndexOf

var fraseDois = "Eu quero a última palavra teste desta frase de teste";

console.log(fraseDois.lastIndexOf("teste"));