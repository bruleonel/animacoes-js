var tela = document.querySelector("canvas");
var pincel = tela.getContext("2d")

pincel.fillStyle = "rgb(255,228,225)";
pincel.fillRect(0, 0, 600, 400);

function desenhaCirculo(x, y, raio) {
    pincel.fillStyle = "rgb(188,143,143)"
    pincel.beginPath();
    pincel.arc(x, y, raio, 0, 2 * Math.PI);
    pincel.fill();
    console.log(x + " " + y)
}

function limpaTela() {
    pincel.clearRect(0, 0, 600, 400);
}

var x = 20;
var y = 20;
var sentidox = 1;
var sentidoy = 1;
function atualizaTela() {
    limpaTela();
    if (x > 600 && y > 400) {
        sentidox = -1;
        sentidoy = - 1;
    } else if (x < 0 && y < 0) {
        sentidox = 1;
        sentidoy = 1;
    }
    pincel.fillStyle = "rgb(255,228,225)";
    pincel.fillRect(0, 0, 600, 400);
    desenhaCirculo(x, y, 10);
    x = x + 1.6 * sentidox;
    y = y + sentidoy;
}

setInterval(atualizaTela, 10);