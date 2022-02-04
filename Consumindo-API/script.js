const base_url = "https://thatcopy.pw/catapi/rest";
const teamBtn = document.getElementById("change-club");
const teamImg = document.getElementById("club");


const getFutebol = async() => {
    try{
        const data = await fetch(base_url);
        const json = await data.json();

        return json.webpurl;
    } catch(e){
        console.log(`Ops, algo deu errado ${e.message}`);
    }
};


const loadAndRefreshIMG = async() => {
    teamImg.src = await getFutebol();
}

teamBtn.addEventListener("click", loadAndRefreshIMG);

loadAndRefreshIMG();