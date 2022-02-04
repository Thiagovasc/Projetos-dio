// Estrutura padrão - Promise
const myPromise = new Promise((resolve, reject) => {
    window.setTimeout(() => {
        resolve(console.log("Resolvido"));
    }, 2000);
});

// Manipuladno Promise
const myPromise = new Promise((resolve, reject) => {
    window.setTimeout(() => {
        resolve(console.log("Resolvido"));
    }, 2000);
});

await myPromise
    .then((result) => result + "passando pelo then")
    .then((result) => result + "enfim finalizado")
    .catch((err) => console.log(err.message));

// Async e await ()
async function promiseSolve(){
    const myPromise = new Promise((resolve, reject) => {
        window.setTimeout(() => {
            resolve(console.log("Resolvido"));
        }, 2500);
    });

    const resolved = await myPromise 
        .then((result) => `${result} passando pelo then.`)
        .then((result) => `${result} enfim finalizado.`)
        .catch((err) => console.log(err));
    
}

// Fetch 
fetch(url, option)
    .then(response => response.json())
    .then(response => console.log(json))

// Fetch metódo GET

fetch(endereco-api.com, {
    method: 'GET',
    cache: 'no-cache',
})
    .then(response => response.json)
    .then(json => console.log(json));

// Fetch metódo POST

fetch(endereco-api.com, {
    method: 'POST',
    cache: 'no-cache',
    body: JSON.stringify(data)  //tornando string
})
    .then(response => response.json)
    .then(json => console.log(json));




