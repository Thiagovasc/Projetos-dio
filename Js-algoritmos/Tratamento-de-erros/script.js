function arrayValidation(arr, num){

    try{

        if(!arr && !num) throw new ReferenceError("Parametros necessários");
        if(typeof arr !== 'object') throw new TypeError("Não é um objeto");
        if(typeof num !== 'number') throw new TypeError("Tipo inválido, um número é necessário");
        if(arr.length !== num) throw new RangeError("Tamanho inválido");

    }
    catch(e){

        if(e instanceof ReferenceError) console.log(`Erro do tipo ReferenceError: ${e.message}`);
        else if(e instanceof TypeError) console.log(`Erro do tipo TypeError: ${e.message}`);
        else if(e instanceof RangeError) console.log(`Erro do tipo RangeError: ${e.message}`);
        else console.log("Erro não esperado");

    }

    return arr;
}

arrayValidation([1,2,3], 4);