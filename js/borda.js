var tela = document.querySelector("canvas");
var pincel = tela.getContext("2d");

function desenhaQuadrado(cor, x, y) {
    var tela = document.querySelector("canvas");
    var pincel = tela.getContext("2d");
    
    pincel.fillStyle = cor;
    pincel.fillRect(x, y, 50, 50);
    pincel.fillStroke = "black";
    pincel.strokeRect(x, y, 50, 50);
}


for (var x = 0; x < 600; x = x + 50) {
    desenhaQuadrado("rgb(200, 200, 300)", x, 0);
}