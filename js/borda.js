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

desenhaQuadrado("pink", 0, 0);
desenhaQuadrado("rgb(200, 200, 300)", 0, 50);
desenhaQuadrado("pink",0, 100);