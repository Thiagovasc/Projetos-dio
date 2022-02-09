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