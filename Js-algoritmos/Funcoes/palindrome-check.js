//Metodo 1

function palindromoCheck(string) {
    if(!string) return;

    return string.split("").reverse().join("") === string;
}

// Metodo 2

function palindromoCheck2(string){
    if (!string) return "String inexistente, insira um texto";

    for (let i = 0; i < string.length/2; i++){
        if (string[i] !== string[string.length - 1 - i]){
            return false;
        }
    }

    return "É um palíndromo";
}

console.log(palindromoCheck2("ama"));