// clearTimeout na prática
var x = 0;

var myTimer = setTimeout(function(){
    console.log("O x é 0");
}, 1500);

x = 5;

if (x > 0) {
    clearTimeout(myTimer);
    console.log("O x passou do 0");
}

// clearInterval na prática
var myInteval = setInterval(function(){
    console.log("Imprimindo interval");
}, 500);

setTimeout(function(){
    console.log("Não precisamos mais repetir!");
    clearInterval(myInteval);
}, 1500);