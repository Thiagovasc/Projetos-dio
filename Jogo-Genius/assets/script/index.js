let ordemCores = []; let ordemCliques = []; var pontuacao = 0

const amarelo = document.getElementById("yellow")
const azul = document.getElementById("blue")
const vermelho = document.getElementById("red")
const verde = document.getElementById("green")


let sorteiaCores = () => {
    let corSorteada = Math.floor(Math.random() * 4)
    ordemCores[ordemCores.length] = corSorteada

    ordemCliques = []

    for(let i in ordemCores){
        let corDoElemento = selecaoCorElemento(ordemCores[i])
        lightColor(corDoElemento, Number(i) + 1)
    }
}

function lightColor(elemento, numero){
    numero *= 500

    setTimeout(() => {
        elemento.classList.add("selected")

    }, numero - 250);

    setTimeout(() => {
        elemento.classList.remove("selected")
    });
}

let checaOrdem = () => {
    for(let i in ordemCliques){
        if(ordemCliques[i] != ordemCores[i]){
            fimdeJogo()
            break
        }
    }
    ordemCliques.length == ordemCores.length ? (alert(`Pontuação = ${pontuacao}`), proxNivel()):0
}

let clique = (cor) => {
    ordemCliques[ordemCliques.length] = cor
    selecaoCorElemento(cor).classList.add("selected");

    setTimeout(() => {
        selecaoCorElemento(cor).classList.remove("selected")
        checaOrdem()
    }, 250)

}

var selecaoCorElemento = (cor) => {
    cor == 0 ? amarelo : 
    cor == 1 ? azul :
    cor == 2 ? vermelho :
    cor == 3 ? verde : undefined
}

let proxNivel = () => {
    pontuacao++
    sorteiaCores()

}

let fimdeJogo = () => {
    alert(`Você perdeu! Sua pontuação foi: ${pontuacao}\n Clique ok para recomeçar`)
    ordemCores = []; ordemCliques = []

    start()
}

function start(){
    alert("Bem vindo ao jogo, espero que se divirta!")
    pontuacao = 0
    proxNivel()
}

amarelo.onclick = () => clique(0)
azul.onclick = () => clique(1)
vermelho.onclick = () => clique(2)
verde.onclick = () => clique(3)

start()