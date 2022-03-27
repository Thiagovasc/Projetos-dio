var jogador, vencedor = null

trocaJogador("X")

function escolhendoQuadrado(id){
    var quadrado = document.getElementById(id)

    quadrado.innerHTML == "" ? quadrado.innerHTML = jogador : 0
    
    jogador === "X" ? jogador = "O": jogador = "X"
    trocaJogador(jogador)
    main()
}

function trocaJogador(valor){
    jogador = valor

    const jogadorAtual = document.getElementById("jogador-atual")
    jogadorAtual.innerHTML = jogador
}

function main(){
    const quadrado1 = document.getElementById(1)
    const quadrado2 = document.getElementById(2)
    const quadrado3 = document.getElementById(3)
    const quadrado4 = document.getElementById(4)
    const quadrado5 = document.getElementById(5)
    const quadrado6 = document.getElementById(6)
    const quadrado7 = document.getElementById(7)
    const quadrado8 = document.getElementById(8)
    const quadrado9 = document.getElementById(9)

    // Linhas 

    if(checaSequencia(quadrado1, quadrado2, quadrado3)){
        vencedorDefinido(quadrado1)
        celebrandoVitoria(quadrado1, quadrado2, quadrado3)
        return
    }

    if(checaSequencia(quadrado4, quadrado5, quadrado6)){
        vencedorDefinido(quadrado4)
        celebrandoVitoria(quadrado4, quadrado5, quadrado6)
        return
    }

    if(checaSequencia(quadrado7, quadrado8, quadrado9)){
        vencedorDefinido(quadrado7)
        celebrandoVitoria(quadrado7, quadrado8, quadrado9)
        return
    }

    // Colunas

    if(checaSequencia(quadrado1, quadrado4, quadrado7)){
        vencedorDefinido(quadrado1)
        celebrandoVitoria(quadrado1, quadrado4, quadrado7)
        return
    }

    if(checaSequencia(quadrado2, quadrado5, quadrado8)){
        vencedorDefinido(quadrado2)
        celebrandoVitoria(quadrado2, quadrado5, quadrado8)
        return
    }

    if(checaSequencia(quadrado3, quadrado6, quadrado9)){
        vencedorDefinido(quadrado3)
        celebrandoVitoria(quadrado3, quadrado6, quadrado9)
        return
    }

    // Diagonais
    
    if(checaSequencia(quadrado1, quadrado5, quadrado9)){
        vencedorDefinido(quadrado1)
        celebrandoVitoria(quadrado1, quadrado5, quadrado9)
        return
    }

    if(checaSequencia(quadrado3, quadrado5, quadrado7)){
        vencedorDefinido(quadrado3)
        celebrandoVitoria(quadrado3, quadrado5, quadrado7)
        return
    }


}

function checaSequencia(quadrado1, quadrado2, quadrado3){
    let equal = false
    if(quadrado1.innerHTML != "" && quadrado1.innerHTML == quadrado2.innerHTML && quadrado1.innerHTML == quadrado3.innerHTML){
        equal = true
    }
    return equal
}

function vencedorDefinido(quadrado){
    vencedor = quadrado.innerHTML

    const vencedorAtual = document.getElementById("vencedor")
    vencedorAtual.innerHTML = vencedor
}

function celebrandoVitoria(quadrado1, quadrado2, quadrado3){
    quadrado1.style.background = "#0f0"
    quadrado2.style.background = "#0f0"
    quadrado3.style.background = "#0f0"
}

function restart(){
    const vencedorAtual = document.getElementById("vencedor")
    vencedorAtual.innerHTML = "?"

    for (var i = 1; i <= 9; i++) {
        var quadrado = document.getElementById(i);
        quadrado.style.background = "#fff"
        quadrado.innerHTML = ""
    }

    trocaJogador('X');
}
