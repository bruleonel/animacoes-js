var tela = document.querySelector('canvas');
var pincel = tela.getContext('2d');

pincel.fillStyle = "rgb(1, 100, 100)";
pincel.fillRect(0, 0, 600, 400);

var raio = 20;

function desenhaCirculo(x, y, raio, cor) {
    pincel.fillStyle = cor;
    pincel.beginPath();
    pincel.arc(x, y, raio, 0, 2 * Math.PI)
    pincel.fill()
}

desenhaCirculo(300,200, raio + 40, 'red'); // maior 
desenhaCirculo(300,200, raio + 20, 'white');
desenhaCirculo(300, 200, raio, 'red'); // menor circulo

function dispara(evento) {
    var x = evento.pageX - tela.offsetLeft;
    var y = evento.pageY - tela.offsetTop;
    console.log(x + " " + y)
    if (x >= 280 && x <= 320 && y >= 180 && y <= 220) {
        alert("Parabéns, você acertou o centro do alvo, ganhou 100 pontos")
    } else if (x >= 260 && x <= 340 && y >= 160 && y <= 240) {
        alert("Parabéns, você acertou o alvo de 50 pontos")
    } else if (x >= 240 && x <= 360 && y >= 140 && y <= 260) {
        alert("Parabéns, você acertou o alvo de 20 pontos")
    }
    else {
        alert("Você errou, tente novamente!")
    }
}

tela.onclick = dispara;