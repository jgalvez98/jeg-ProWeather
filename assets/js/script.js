var apiKey="26b8767a0c9a67d5cba18ad715da7418"
var titleEl=document.getElementById("title")
var tempEl=document.getElementById("temp")
var windEl=document.getElementById("wind")
var humidityEl=document.getElementById("humidty")
var searchBtn=document.getElementById("search-btn")
var cityInputEl=document.getElementById("city-input")
var fivedayForecastEl=getElementById("fiveday-forecast")


function searchCity(){
    var cityName=cityInputEl.value

    displayWeather(cityName) 
}

function displayWeather(cityName){
    var url="https://api.openweathermap.org/data/2.5/weather?q="+cityName+"&appid="
    + apiKey+"&units=imperial"

    fetch(url)
    .then(function(response){
        return response.json()
    })
    .then(function(currentData){
        console.log(currentData)
        titleEl.innerHTML=currentData.name + dayjs.unix(currentData.dt).format("(MM/DD/YYYY)")+
         "<img src='https://openweathermap.org/img/wn/"+currentData.weather[0].icon+"@2x.png'>"
    })
    
    var forecastUrl="https://api.openweathermap.org/data/2.5/forecast?q="+cityName+"&appid="+apiKey+"&units=imperial"
    
    fetch(forecastUrl)
    .then(function(response){
        return response.json()
    })
    .then(function(forecastData){
        console.log(forecastData)
        //grab every 12pm for each day for 5 days//
        var forecastArr=forecastData.list
        fivedayForecastEl.textContent=""
        for (let i= 3;j=1; i < forecastArr.length; i=i+8,j++) {
            console.log(forecastArr[i])
            var cardTitle=document.getElementById("card-title"+j)
            cardTitle.textContent=forecastArr[i].dt

        }
    })

}



searchBtn.addEventListener("click", searchCity )