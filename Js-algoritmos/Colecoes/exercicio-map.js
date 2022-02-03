/* Map = coleção de arrays no formato [chave, valor], assim como os dicionários em python 3
 Diferente dos objetos o map podem ter chaves de qualquer tipo
 Iterável pelo loop for of 
 Exemplo: const myMap = new map(); 
 */

 /* Comandos:
    Adicionando elementos:
    myMap.set("maçã", "fruta"); maçã é a chave, fruta é o valor
    Excluir:
    myMap.delete("maçã") return true;
    Checando valor:
    myMap.get("maçã") return fruta    
*/


const mapEquipe = new Map();

mapEquipe.set("Thiago", "Admin");
mapEquipe.set("Roberto", "Admin");
mapEquipe.set("Claudio", "Vice");



function getAdmins(Map){
    for (let [key, value] of mapEquipe){
        if(value == 'Admin') console.log(`${key} é um Admin`);
    }
    console.log(mapEquipe);
}

getAdmins(mapEquipe);