const precos = [1,2,3,4,5,6];


// Method 1:
const reajuste = precos.map((item) => item * 2)
console.log("Metodo 1: " + reajuste);

//Method 2:
function inflacao(array){
    const reaj = array.map((item) => item * 2)
    console.log("\nMetodo 2: " + reaj);
}



// Method 3, using "this"

const orange = {
	price: 2,
};

const apple = {
	price: 1.5,
};

function inflacao2(array, object) {

	return array.map(function (item) {
		return item * this.price;
	}, object);
}


inflacao(precos);
console.log("\nMetodo 3 - Maçã: "+ inflacao2(precos, apple));
console.log("\nMetodo 3 - Laranja: "+ inflacao2(precos, orange));

