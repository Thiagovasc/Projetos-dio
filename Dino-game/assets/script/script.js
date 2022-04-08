const sonic = document.getElementById("sonic")
const cacto = document.getElementById("obstacle")
const pontuacao = document.getElementById("score-points")
let isAlive = true


function jump(){
    if(sonic.classList != "jump"){
        sonic.classList.add("jump")
    
        setTimeout(function(){
            sonic.classList.remove("jump")
        }, 210)
    }
}

document.addEventListener("keydown", jump)


let detectandoColisao = setInterval( function(){
    let score = 0
    pontuacao.innerHTML = score

    var sonicEixoX = parseInt(window.getComputedStyle(sonic).getPropertyValue("top"))
    var cactoEixoY = parseInt(window.getComputedStyle(cacto).getPropertyValue("left"))

    if(cactoEixoY < 50 && cactoEixoY > 0){
        if(sonicEixoX > 82){
            gameOver()
            isAlive = false
        }
        else {
            scoreRecord()
            console.log("Desviou")
            console.log(score)
        }
    }

})

function scoreRecord(){
    score += 10

}

function gameOver(){
    alert("Game Over")
    isAlive = true
    score = 0
}
