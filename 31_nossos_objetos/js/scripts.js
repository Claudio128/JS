let pessoas = {
    nome: "Claudio",
    idade: 20,
    falar: function(){
        console.log("Olá, tudo bem?");
    },
    soma: function(a, b) {
        return a + b;
    }
};

console.log(pessoas.nome);
console.log(pessoas.idade);

pessoas.falar();

var soma = pessoas.soma(2, 2);
console.log(soma);