// ESCOPO GLOBAL
var x = 1;

var y = 3;

console.log(x, y);
function teste() {
    // ESCOPO LOCAL
    var z = 0;

    console.log(z);
}

teste();

function testando() {
    var z = 5;

    console.log(z);
}

testando();

if (true) {
    var p = 1;
}

console.log(p);