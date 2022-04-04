function start() { // Inicio da função start()

	$("#inicio-game").hide()
	
	$("#background-game").append("<div id='jogador' class='animacao-jogador'></div>")
	$("#background-game").append("<div id='inimigo1' class='animacao-inimigo'></div>")
	$("#background-game").append("<div id='inimigo2'></div>")
	$("#background-game").append("<div id='amigo' class='animacao-amigo'></div>")
	$("#background-game").append("<div id='placar'></div>");
	$("#background-game").append("<div id='energia'></div>");

	var jogo = {}
	/*Comandos */
	const TECLA = {
		W: 87,
		S: 83,
		D: 68
		}
	
	jogo.pressionou = []

	/* Loop infinito do game */
	jogo.timer = setInterval(loop, 30)

	var velocidadeInimigo = 5; var posicaoY = parseInt(Math.random() * 334)
	var podeDisparar = true
	var fimdejogo = false

	var pontos = 0; var salvos = 0; var perdidos = 0; var energiaAtual = 3
	
	/* Trilha sonora */
	var somDisparo = document.getElementById("somDisparo");
	var somExplosao = document.getElementById("somExplosao");
	var musica = document.getElementById("musica");
	var somGameover = document.getElementById("somGameover");
	var somResgate = document.getElementById("somResgate");

	musica.addEventListener("ended", function(){ musica.currentTime = 0; musica.play(); }, false);
	musica.play();

		
	$(document).keydown(function(e){
		jogo.pressionou[e.which] = true;
		});
	
	
	$(document).keyup(function(e){
		jogo.pressionou[e.which] = false;
	});
	
	function loop() {
		movimentaBackground()
		movimentaJogador()
		movimentaInimigo1()
		movimentaInimigo2()
		movimentaAmigo()
		colisao()
		placar()
		energia()
	} 

	function movimentaBackground() {
		esquerda = parseInt($("#background-game").css("background-position"));
		$("#background-game").css("background-position",esquerda-1);
	
	}

	function movimentaJogador() {
		const topo = parseInt($("#jogador").css("top"))
		
		jogo.pressionou[TECLA.W] ? $("#jogador").css("top", topo - 10) : 
		jogo.pressionou[TECLA.S] ? $("#jogador").css("top", topo + 10) :
		jogo.pressionou[TECLA.D] ? disparar() : undefined 

		if(topo <= 0) {
			$("#jogador").css("top", topo + 10);

		}else if(topo >= 434) {	
			$("#jogador").css("top", topo - 10);
				
		}
	}

	function movimentaInimigo1(){
		let posicaoInimigo1 = parseInt($("#inimigo1").css("left"));
		$("#inimigo1").css("left", posicaoInimigo1 - velocidadeInimigo);
		$("#inimigo1").css("top", posicaoY);
			
		if(posicaoInimigo1 <= 0) {
			let posicaoY = parseInt(Math.random() * 334);
			$("#inimigo1").css("left", 694);
			$("#inimigo1").css("top", posicaoY);	
		}

	}

	function movimentaInimigo2() {
        let posicaoInimigo2 = parseInt($("#inimigo2").css("left"));
		$("#inimigo2").css("left", posicaoInimigo2 - 3);
				
		if(posicaoInimigo2 <= 0) {
			$("#inimigo2").css("left", 775);
					
		}
	}

	function movimentaAmigo() {
		let posicaoAmigo = parseInt($("#amigo").css("left"));
		$("#amigo").css("left", posicaoAmigo +=1); /*posicaoAmigo++ não funciona */
		
		if(posicaoAmigo > 906) {
			$("#amigo").css("left", 0);
		
		}
	}

	
	function disparar() {
		
		if (podeDisparar == true) {
			somDisparo.play()
			podeDisparar = false;
			
			topo = parseInt($("#jogador").css("top"))
			posicaoX = parseInt($("#jogador").css("left"))
			tiroX = posicaoX + 190;
			topoTiro = topo + 42;
			$("#background-game").append("<div id='disparo'></div");
			$("#disparo").css("top", topoTiro);
			$("#disparo").css("left", tiroX);
			
			var tempoDisparo = window.setInterval(executaDisparo, 30);
			
		} 
	
		function executaDisparo() {
			posicaoX = parseInt($("#disparo").css("left"));
			$("#disparo").css("left",posicaoX+15); 

			if (posicaoX > 900) {
							
				window.clearInterval(tempoDisparo);
				tempoDisparo = null;
				$("#disparo").remove();
				podeDisparar = true;
			}
		} 
	}
	
	function colisao() {
		const colisao1 = ($("#jogador").collision($("#inimigo1")));
		const colisao2 = ($("#jogador").collision($("#inimigo2")));
		const colisao3 = ($("#disparo").collision($("#inimigo1")));
		const colisao4 = ($("#disparo").collision($("#inimigo2")));
		const colisao5 = ($("#jogador").collision($("#amigo")));
		const colisao6 = ($("#inimigo2").collision($("#amigo")));

			
		if (colisao1.length > 0) {	
			inimigo1X = parseInt($("#inimigo1").css("left"))
			inimigo1Y = parseInt($("#inimigo1").css("top"))
			explosao1(inimigo1X, inimigo1Y)
			energiaAtual--
			somExplosao.play()
		
			posicaoY = parseInt(Math.random() * 334)
			$("#inimigo1").css("left", 694)
			$("#inimigo1").css("top", posicaoY)
		}

		if(colisao2.length > 0) {
			inimigo2X = parseInt($("#inimigo2").css("left"));
			inimigo2Y = parseInt($("#inimigo2").css("top"));
			explosao2(inimigo2X, inimigo2Y);
			energiaAtual--
			somExplosao.play()
					
			$("#inimigo2").remove();		
			reposicionaInimigo2();
				
		}

		if (colisao3.length > 0) {		
			inimigo1X = parseInt($("#inimigo1").css("left"));
			inimigo1Y = parseInt($("#inimigo1").css("top"));
			pontos += 100
			velocidadeInimigo += 0.3
			somExplosao.play()
				
			explosao1(inimigo1X,inimigo1Y);
			$("#disparo").css("left", 950);
				
			posicaoY = parseInt(Math.random() * 334);
			$("#inimigo1").css("left", 694);
			$("#inimigo1").css("top", posicaoY);
				
		}

		if(colisao4.length > 0) {
			inimigo2X = parseInt($("#inimigo2").css("left"));
			inimigo2Y = parseInt($("#inimigo2").css("top"));
			$("#inimigo2").remove();
			pontos += 50
			velocidadeInimigo += 0.5
			somExplosao.play()
		
			explosao2(inimigo2X,inimigo2Y);
			$("#disparo").css("left",950);
			
			reposicionaInimigo2();
				
		}

		if(colisao5.length > 0) {		
			reposicionaAmigo();
			$("#amigo").remove();
			salvos++
			somResgate.play()

		}

		if(colisao6.length > 0) {
			amigoX = parseInt($("#amigo").css("left"));
			amigoY = parseInt($("#amigo").css("top"));
			explosao3(amigoX,amigoY);
			$("#amigo").remove();
			perdidos++
			somPerdido.play();
			reposicionaAmigo();
					
		}
	}

	function explosao1(inimigo1X,inimigo1Y) {
		$("#background-game").append("<div id='explosao1'></div");
		$("#explosao1").css("background-image", "url(imagens/explosao.png)");
		var div=$("#explosao1");
		div.css("top", inimigo1Y);
		div.css("left", inimigo1X);
		div.animate({width: 200, opacity: 0}, "slow");
		
		var tempoExplosao=window.setInterval(removeExplosao, 1000);
		
		function removeExplosao() {
			div.remove();
			window.clearInterval(tempoExplosao);
			tempoExplosao = null;
			
		}		
	}
		
	function explosao2(inimigo2X, inimigo2Y) {
	
		$("#background-game").append("<div id='explosao2'></div");
		$("#explosao2").css("background-image", "url(imagens/explosao.png)");
		var div2=$("#explosao2");
		div2.css("top", inimigo2Y);
		div2.css("left", inimigo2X);
		div2.animate({width:200, opacity:0}, "slow");
		
		var tempoExplosao2 = window.setInterval(removeExplosao2, 1000);
		
		function removeExplosao2() {	
			div2.remove();
			window.clearInterval(tempoExplosao2);
			tempoExplosao2 = null;
			
		}
	}

	function explosao3(amigoX,amigoY) {
		$("#background-game").append("<div id='explosao3' class='animacao-amigo-explosao'></div");
		$("#explosao3").css("top", amigoY);
		$("#explosao3").css("left", amigoX);

		var tempoExplosao3=window.setInterval(resetaExplosao3, 1000);

		function resetaExplosao3() {
			$("#explosao3").remove();
			window.clearInterval(tempoExplosao3);
			tempoExplosao3 = null;
				
		}
	}

	function reposicionaInimigo2() {
		var tempoColisao4 = window.setInterval(reposiciona4, 5000);
			
		function reposiciona4() {
			window.clearInterval(tempoColisao4);
			tempoColisao4 = null;
				
			if (fimdejogo == false) {			
				$("#background-game").append("<div id=inimigo2></div");
			
			}
		}	
	}

	function reposicionaAmigo() {
		var tempoAmigo = window.setInterval(reposiciona6, 6000);
		
		function reposiciona6() {
			window.clearInterval(tempoAmigo);
			tempoAmigo = null;
			
			if(fimdejogo == false) {			
				$("#background-game").append("<div id='amigo' class='animacao-amigo'></div>");
			
			}		
		}
	}

	function energia() {

		energiaAtual == 3 ? $("#energia").css("background-image", "url(imagens/energia3.png)"):
		energiaAtual == 2 ? $("#energia").css("background-image", "url(imagens/energia2.png)"):
		energiaAtual == 1 ? $("#energia").css("background-image", "url(imagens/energia1.png)"):
		energiaAtual == 0 ? ($("#energia").css("background-image", "url(imagens/energia0.png)"), gameOver()): undefined

	} 
	
	function placar() {
		$("#placar").html(`<h2> Pontos: ${pontos} | Salvos: ${salvos} | Perdidos: ${perdidos}</h2>`);
	
	}

	function gameOver() {
		fimdejogo = true
		musica.pause(); somGameover.play()
		
		window.clearInterval(jogo.timer);
		jogo.timer = null
		
		$("#jogador").remove(); $("#inimigo1").remove()
		$("#inimigo2").remove(); $("#amigo").remove()
		
		$("#background-game").append("<div id='fim'></div>");

		$("#fim").html(`<h1> Game Over </h1><p>Sua pontuação foi: ${pontos}` + "</p>" + "<div id='reinicia' onClick=reiniciaJogo()><h3>Jogar Novamente</h3></div>");
	}

}

function reiniciaJogo() {
	somGameover.pause();
	$("#fim").remove();
	start();
	
}