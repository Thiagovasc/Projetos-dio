function pairSubstitution(myArray){

    if (!myArray) return -1; // casos nulos e undefined
    if (!myArray.length) return -1;

    for (let i = 0; i < myArray.length; i++){

        if (myArray[i] % 2 == 0){
            console.log(`O valor ${myArray[i]} foi substituido por 0`)
            myArray[i] = 0;

        } else if (myArray[i] == 0){
            console.log("Valor já é equivalente a 0...")
        }
    }

    console.log(`\n Array final ${myArray}`)
}

pairSubstitution([1, 2, 3, 4, 6])