const sonic = document.getElementById("sonic")
const cacto = document.getElementById("obstacle")
const pontuacao = document.getElementById("score-points")
var score = 0;  pontuacao.innerHTML = score

function jump(){
    if(sonic.classList != "jump"){
        sonic.classList.add("jump")
    
        setTimeout(function(){
            sonic.classList.remove("jump")
        }, 210)
    }
}

document.addEventListener("keydown", function(event){
    jump()

})


let detectandoColisao = setInterval( function(){

    var sonicEixoX = parseInt(window.getComputedStyle(sonic).getPropertyValue("top"))
    var cactoEixoY = parseInt(window.getComputedStyle(cacto).getPropertyValue("left"))

    if(cactoEixoY < 50 && cactoEixoY > 0){
        if(sonicEixoX > 82){
            cacto.classList.remove("slider")
            console.log("Game Over!")
        }
        else {
            score += 10
            pontuacao.innerHTML = score
            console.log("Desviou")
        }
    }

})

function scoreRecord(){

}

function GameOver(){}