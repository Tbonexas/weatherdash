// Using Vanilla JS for all script // 

// Variables to not be reassigned // 
const appId = '8a595c36a18b2738713e53c678c45e59';
const units = 'imperial';
// search method variable // 
let searchMethod;

// function to determine zipcode or city name passing searchTerm // 
function getSearchMethod(searchTerm){
     if(searchTerm.length === 5 && Number.parseInt(searchTerm) + '' === searchTerm)
     searchMethod = 'zip';
     else
     searchMethod = 'q';
}


function searchWeather(searchTerm){
//URL calls information from API to return JSON // 
    getSearchMethod(searchTerm);
    fetch(`https://api.openweathermap.org/data/2.5/weather?${searchMethod}=${searchTerm}&APPID=${appId}&units${units}`).then(result => {
    return result.json();
    }).then(result => {
        init(result);
    })
}

function init(resultFromServer) {
    // parsing JSON to get background for weather currently happening with switch statement to each case // 
    // results from server for first 5 in array for forecast // 
    switch (resultFromServer.weather[0].main) {
        case 'Clear':
            // this will generate image for clear sky // 
            document.body.style.backgroundImage = 'url("https://github.com/Tbonexas/weatherdash/blob/master/assets/Clearskies.jpeg?raw=true")';
            break;
        case 'Clouds':
            document.body.style.backgroundImage = 'url("Cloudy.jpeg")';
            break;

        case 'Rain':
        case 'Drizzle':
        case 'Mist':
            document.body.style.backgroundImage = 'url("Rain.jpeg")';
            break;

        case 'Thunderstorm':
            document.body.style.backgroundImage = 'url("Storm.jpeg")';
            break;
        case 'Snow':
            document.body.style.backgroundImage = 'url("Snow.jpeg")';
            break;
        case '':
        default:
            break;
    }
}
// click function for search button // 
document.getElementById('searchBtn').addEventListener('click', () =>{
    let searchTerm = document.getElementById('searchInput').value;
    if(searchTerm)
    searchWeather(searchTerm);
})