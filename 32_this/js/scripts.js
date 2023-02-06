var teste = 5;

console.log(this.teste);
console.log(teste)

let pessoas = {
    nome: "Claudio",
    idade: 20,
    falar: function(){
        console.log("Olá, tudo bem?");
    },
    dizerNome: function(){
        console.log("O meu nome é " + this.nome);
    },
    aniversario: function(){
        this.idade += 1;
    },
    saudacao: function() {
        return "Sr. " + this.nome;
    }
};

pessoas.dizerNome();

console.log(pessoas.idade);

pessoas.aniversario();
pessoas.aniversario();
pessoas.aniversario();

console.log(pessoas.idade);

var sdc = (pessoas.saudacao())

console.log(sdc);