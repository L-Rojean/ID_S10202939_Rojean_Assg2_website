/*const Url="na1.api.riotgames.com"
const Url="americas.api.riotgames.com"
const Url="asia.api.riotgames.com/riot/account/v1/accounts/by-riot-id/{gameName}/{tagLine}" */

function runAPI() {
    var ID = document.getElementById("input").value;
    console.log(ID);
    var url = "https://cors-anywhere.herokuapp.com/https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/riotid?api_key=RGAPI-bca63eaa-dcc7-4892-9be5-c828505abb75";
    var URL = url.replace("riotid", ID);
    console.log(URL);
    $.ajax({
        url: URL,
        type: "GET",
        success: function(result){
            console.log(result)
        },
        error: function(error){
            console.log(`Error ${error}`)
        }
    })
}