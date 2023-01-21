var idade = 16;
var nome = "Edson";

if (nome == "Edson" && idade == 16) {
    console.log("O Edson pode entrar na aula de esgrima");
} else {
    console.log("Este não é o Edson");
}

if (1 == 1 && 3 > 2 && true) {
    console.log("Passou");
}

if ((1 == 1 && 3 > 2) && true) {
    console.log("Passou");
} else if (nome === "Edson" && idade >= 14) {
    console.log("Aqui passou!");
}