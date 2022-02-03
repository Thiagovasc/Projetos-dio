const meuArray = [30, 30, 40, 5, 223, 2049, 3034, 5];

function uniqueValeus(array){
    const mySet = new Set(meuArray);

    return[...mySet]
}

console.log(uniqueValeus(meuArray))