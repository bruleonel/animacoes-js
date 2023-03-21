var tela = document.querySelector("canvas");
var pincel = tela.getContext("2d");

pincel.fillStyle = "pink";
pincel.fillRect(0, 200, 600, 400);

function desenhaBolinha(evento) {
    var x = evento.pageX - tela.offsetLeft;
    var y = evento.pageY - tela.offsetTop;
    pincel.fillStyle = "black";
    pincel.beginPath();
    pincel.arc(x, y, 10, 0, 2 * 3.14);
    pincel.fill();
}

tela.onclick = desenhaBolinha;