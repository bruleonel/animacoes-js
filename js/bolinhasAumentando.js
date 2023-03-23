/*aumentando uma vez
var tela = document.querySelector('canvas');
var pincel = tela.getContext('2d');

pincel.fillStyle = "rgb(200, 400, 300)";
pincel.fillRect(0, 0, 600, 400);

function desenhaCirculo(evento) {
    var raio = 10;
    var x = evento.pageX - tela.offsetLeft;
    var y = evento.pageY - tela.offsetTop;

    if (evento.shiftKey) {
        raio = raio + 20;
    }

    pincel.fillStyle = 'blue';
    pincel.beginPath();
    pincel.arc(x, y, raio, 0, 2 * 3.14);
    pincel.fill();
    console.log(x + ',' + y);
}

tela.onclick = desenhaCirculo;*/

var tela = document.querySelector('canvas');
var pincel = tela.getContext('2d');
pincel.fillStyle = 'grey';
pincel.fillRect(0, 0, 600, 400);
var raio = 10;

function desenhaCirculo(evento) {
  var x = evento.pageX - tela.offsetLeft;
  var y = evento.pageY - tela.offsetTop;
  console.log(x + ',' + y);
  
  if (evento.shiftKey && evento.altKey) {

    alert('Só aperte uma tecla por vez, por favor!');

} else if(evento.shiftKey && raio + 10 <= 40) {
    raio = raio + 10;

} else if(evento.altKey && raio - 5 >= 10) {
    raio = raio - 5;

}
    
  pincel.fillStyle = 'blue';
  pincel.beginPath();
  pincel.arc(x, y, raio, 0, 2 * 3.14);
  pincel.fill();
}
tela.onclick = desenhaCirculo;