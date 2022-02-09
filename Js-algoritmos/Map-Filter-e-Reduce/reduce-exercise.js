const nums = [0, 23, 14, 12, 7, 5];

// Method 1
const reducer = (prev, curr) => prev + curr;
console.log(nums.reduce(reducer))

// Method 2
function somaTudo(array){
    if(!array && !array.length) return;
    const sum = array.reduce((prev, curr) => prev + curr)
    return sum
}

console.log(somaTudo(nums));

// Exercise 2

const prices = [ 0.4, 3, 7, 99, 22, 10];


function discount(array, balance){
    if(!array && !array.length) return;
    const decrement = array.reduce((prev, curr) => prev + curr)
    
    total = balance - decrement;
    console.log(`Sum: ${decrement}, Balance: ${balance}, Remaining: ${total}`)
}


discount(prices, 1000);