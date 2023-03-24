var tela = document.querySelector("canvas");
var pincel = tela.getContext("2d");
var altura = 1000;
var largura = 800;
pincel.fillStyle = "rgb(245,245,245)";
pincel.fillRect(0, 0, altura, largura);

var raio = 10;

var xAleatorio;
var yAleatorio;

function desenhaCirculo(x, y, raio, cor) {
    pincel.fillStyle = cor;
    pincel.beginPath();
    pincel.arc(x, y, raio, 0, 2 * Math.PI);
    pincel.fill();
}

function limpaTela() {
    pincel.clearRect(0, 0, altura, largura);
}

function desenhaAlvo(x, y) {
    desenhaCirculo(x, y, raio + 20, "red");
    desenhaCirculo(x, y, raio + 10, "white");
    desenhaCirculo(x, y, raio, "red");
}

function sorteaAleatorio(maximo) {
    return Math.floor(Math.random() * maximo)
}

function atualizaTela() {
    limpaTela();
    pincel.fillStyle = "rgb(245,245,245)";
    pincel.fillRect(0, 0, altura, largura);
    xAleatorio = sorteaAleatorio(altura);
    yAleatorio = sorteaAleatorio(largura);

    desenhaAlvo(xAleatorio, yAleatorio);
}
    
setInterval(atualizaTela, 2000);

function dispara(evento) {
    var x = evento.pageX - tela.offsetLeft;
    var y = evento.pageY - tela.offsetTop;

    if (x > xAleatorio - raio && x < xAleatorio + raio && y > yAleatorio - raio && y < yAleatorio + raio) {
        alert("Parabéns, você acertou o centro do alvo, ganhou 100 pontos")
    }
    else if (x > xAleatorio - (raio + 10) && x < xAleatorio + (raio + 10) && y > yAleatorio - (raio + 10) && y < yAleatorio + (raio + 10)) {
        alert("Parabéns, você acertou o alvo de 50 pontos")
    }
    else if (x > xAleatorio - (raio + 20) && x < xAleatorio + (raio + 20) && y > yAleatorio - (raio + 20) && y <= yAleatorio + (raio + 20)) {
        alert("Parabéns, você acertou o alvo de 20 pontos")
    }
    else {
        alert("Você errou, tente novamente!")
    }
}
tela.onclick = dispara;