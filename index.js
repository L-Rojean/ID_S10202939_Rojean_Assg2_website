/*const Url="na1.api.riotgames.com"
const Url="americas.api.riotgames.com"
const Url="asia.api.riotgames.com/riot/account/v1/accounts/by-riot-id/{gameName}/{tagLine}" */

function getInput() {
    var ID = document.getElementById("input").value;
    console.log(ID);
    var url = "https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/riotid?api_key=RGAPI-85dc592d-07f0-4068-8e20-0b821abfa388";
    var URL = url.replace("riotid", ID);
    console.log(URL);
}

function getRequest() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET","https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/scarra?api_key=RGAPI-85dc592d-07f0-4068-8e20-0b821abfa388", true);
    xhttp.send();
}

function RunAllFunctions() {
    getInput();
    getRequest();
}