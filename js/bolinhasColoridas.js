var tela = document.querySelector('canvas');
var pincel = tela.getContext('2d');
pincel.fillStyle = "rgb(200, 400, 300)";
pincel.fillRect(0, 0, 600, 400);

var cores = ["rgb(100, 200, 300)", "rgb(300, 200, 300)", "rgb(100, 50, 300)", "rgb(100, 50, 0)", "rgb(200, 0, 100)"];

var indiceCor = 0;

function desenhaCirculo(evento) {

    var x = evento.pageX - tela.offsetLeft;
    var y = evento.pageY - tela.offsetTop;
    pincel.fillStyle = cores[indiceCor];
    pincel.beginPath();
    pincel.arc(x, y, 10, 0, 2 * 3.14);
    pincel.fill();
    console.log(x + ',' + y);
}

tela.onclick = desenhaCirculo;

function mudaCor() {
    indiceCor++;
    if (indiceCor >= cores.length) {
        indiceCor = 0;
    }
    return false;
}

tela.oncontextmenu = mudaCor;