# Estundando sobre Jogos!

Olá, estou desenvolvendo esse projeto para facilitar minhas anotações referente à animações com JS, o intuito aqui é deixar cada passo do meu aprendizado registrado!

Você Pode acessar meu progeto por aqui:
<a href="https://bruleonel.github.io/animacoes-js"/>Meu Pojeto</a>

## Anotações importantes:

### Função setInterval();
Recebe outra função que será executada em intervalos e tempos.

Exemplo de Uso:

function exibirMensagem() {
    console.log("Chamei a função");
}
setInterval(exibirMensagem, 1000);

### clearRect();
Limpa a tela.

Exemplo de Uso:

var tela = document.querySelector("canvas"); */Obtendo recursos*/
var pincel = tela.getContext("2d")

pincel.fillStyle = "rgb(255,228,225)"; /*Desenhando a tela*/
pincel.fillRect(0, 0, 600, 400);

pincel.clearRect(0, 0, 600, 400);

