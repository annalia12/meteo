function refreshWeather(response){
    let temperatureElement= document.querySelector("#temperature");
    let temperature=response.data.temperature.current;
    let cityElement= document.querySelector("#city");
    cityElement.innerHTML=response.data.city;

    temperatureElement.innerHTML= Math.round(temperature);
}
function searchCity(city){
    let apiKey="eat3bf2c0ed301443o16635a4ff05de2";
    let apiUrl=
    "https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}"
axios.get(apiUrl).then(refreshWeather);
}


function handleSearchSubmit(event){
    event.preventDefault();
    let searchInput=document.querySelector("#search-form-input");
    let cityElement=document.querySelector("#city"); 
    cityElement.innerHTML=searchInput.value;
    searchCity(searchInput.value);
}
let searchFormElement=document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);

searchCity("Lisbon");