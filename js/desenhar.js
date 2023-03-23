var paleta = document.querySelector('input');
var tela = document.querySelector('canvas');
var pincel = tela.getContext('2d');

pincel.fillStyle = "rgb(200, 200, 300)";
pincel.fillRect(0, 0, 600, 400);

var desenha = false;

function desenhaCirculo(evento) {

    if(desenha) {
        var x = evento.pageX - tela.offsetLeft;
        var y = evento.pageY - tela.offsetTop;
        pincel.fillStyle = paleta.value;
        pincel.beginPath();
        pincel.arc(x, y, 10, 0, 2 * 3.14);
        pincel.fill();
    }
    console.log(x + ',' + y);
}

tela.onmousemove = desenhaCirculo;

function habilitaDesenhar() {

    desenha = true;
}

function desabilitaDesenhar() {

    desenha = false;
}

tela.onmousedown = habilitaDesenhar;
/*tela.onmousedown = function() {

        desenha = true;
    } */

tela.onmouseup = desabilitaDesenhar;