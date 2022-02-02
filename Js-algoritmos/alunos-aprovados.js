const alunos = [
    {
        Nome: 'Thiago',
        Nota: 8,
    },
    {
        Nome: 'Carlos',
        Nota: 6,
    },
    {
        Nome: 'João',
        Nota: 4,
    },
];


function boletim (array, media){
    let alunos_aprovados = [];
    let alunos_reprovados = []

    for(let i = 0; i < array.length; i++){
        if(array[i].Nota >= 6) {
            alunos_aprovados.push(array[i].Nome)
        } else alunos_reprovados.push(array[i].Nome)
    } 

    console.log("Alunos aprovados:");
    console.table(alunos_aprovados);
    console.log("\nAlunos reprovados:");
    console.table(alunos_reprovados);
}

function boletim2(array, media){
    let alunos_aprovados = [];
    let alunos_reprovados = [];

    for(let i = 0; i < array.length; i++){
        const {Nota, Nome} = array[i];

        if(array[i].Nota >= media) {
            alunos_aprovados.push(Nome);
        } else {
            alunos_reprovados.push(Nome);
        }
    }
    

    console.log("Alunos aprovados:");
    console.table(alunos_aprovados);
    console.log("\nAlunos reprovados:");
    console.table(alunos_reprovados);
}

boletim2(alunos, 5);