var jogador = null
var jogadorAtual = document.getElementById("jogadorAtual")

trocaJogador('X')

function escolhendoQuadrado(id){
    var quadrado = document.getElementById(id)
    quadrado.innerHTML = jogador
    console.log(id)
}

function trocaJogador(valor){
    jogador = valor
    jogadorAtual.innerHTML = jogador
}
