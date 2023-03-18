var tela = document.querySelector('canvas');
var pincel = tela.getContext('2d');

pincel.fillStyle = "lightblue";
pincel.fillRect(0, 0, 600, 400);

pincel.fillStyle = "lightgreen";
pincel.fillRect(0, 0, 200, 400);

pincel.fillStyle = "lightpink";
pincel.fillRect(400, 0, 200, 400);

/*Para criar outras formas*/
pincel.fillStyle = "lightyellow";
pincel.beginPath();
pincel.moveTo(300, 200);
pincel.lineTo(200, 400);
pincel.lineTo(400, 400);
pincel.fill();