// Variables to not be reassigned // 
const appId = '8a595c36a18b2738713e53c678c45e59';
const units = 'imperial';

// remove "zip" after log completes // 
const searchMethod = 'zip';

function searchWeather(searchTerm){
//URL calls information from API to return JSON // 
    fetch(`https://api.openweathermap.org/data/2.5/weather?${searchMethod}=${searchTerm}&APPID=${appId}&units${units}`).then(result => {
    return result.json();
    }).then(result => {
        init(result);
    })
}

function init(resultFromServer) {
    console.log(resultFromServer);
}

document.getElementById('searchBtn').addEventListener('click', () =>{
    let searchTerm = document.getElementById('searchInput').value;
    if(searchTerm)
    searchWeather(searchTerm);
})