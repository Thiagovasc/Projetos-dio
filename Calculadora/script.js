function calculadora () {
    const op = Number(prompt("Escolha a operação: \n 1 - Adição (+) \n 2 - Subtração (-) \n 3 -  Multiplicação (*) \n 4 - Divisão Inteira (%) \n 5 - Divisão Real (/) \n 6 - Potência (**) \n"))


    function novaOp(){
        let opcao = prompt("Deseja realizar uma nova operação? \n 1 - Sim \n 2 - Não")

        if (opcao == 1){
            calculadora();
        } else if (opcao == 2){
            alert("Obrigado, até mais!")
        } else {
            alert("Opção não correspondente.")
            novaOp();
        }
    }

    if (!op || op >= 7){
        alert("Operação inválida");
        calculadora();

    } else {
        let num1 = Number(prompt("Digite o primeiro valor: "));
        let num2 = Number(prompt("Digite o segundo valor: "));
        let resultado;

        if (!num1 || !num2){
            alert("Parâmetros incorretos");
            calculadora();
        }

        function soma(){
            resultado = num1 + num2;
            alert(`${num1} + ${num2} = ${resultado}`)
        }

        function subtracao(){
            resultado = num1 - num2;
            alert(`${num1} - ${num2} = ${resultado}`)
        }

        function multiplicacao(){
            resultado = num1 * num2;
            alert(`${num1} x ${num2} = ${resultado}`)
        }

        function divisao_int(){
            resultado = num1 % num2;
            alert(`O resto da divisão de ${num1} por ${num2} é ${resultado}`)
        }

        function divisao_real(){
            resultado = num1 / num2;
            alert(`${num1} / ${num2} = ${resultado}`)    
        }

        function potenciacao(){
            resultado = num1 ** num2;
            alert(`${num1} elevado à ${num2} = ${resultado}`)    
        }

        switch (op){
            case 1:
                soma();
                break;
            case 2:
                subtracao();
                break;
            case 3:
                multiplicacao();
                break;
            case 4:
                divisao_int();
                break;
            case 5:
                divisao_real();
                break;
            case 6:
                potenciacao();
                break; 
        }
    } 
        novaOp();
}

calculadora();