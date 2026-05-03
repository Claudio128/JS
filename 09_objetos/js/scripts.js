var obj = {
    nome: "Claudio",
    idade: "20",
    profissao: "Programador",
    estaTrabalhando: true,
};

console.log(obj);

console.log(typeof obj);

console.log(obj.nome);
console.log(obj.idade);
console.log(obj.profissao);

console.log("Meu nome é " + obj.nome);

obj.nome = "Mago";

console.log(obj.nome);
console.log(obj);

obj.graduando = true;
console.log(obj)