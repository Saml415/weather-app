var currentData = "https://api.openweathermap.org/data/2.5/weather?q=Seoul&units=imperial&appid=6be0da943ba57ed80b521a05be5ca124"
var currentBox = document.querySelector('current-city')

console.log(currentData)

fetch(currentData)
.then(function(response){
    return response.json()
})
.then(function(data){
    console.log(data)
    console.log(data.main.temp)
    $('.current-city h2').text(data.name + data.weather[0].icon)
    $('p').eq(0).text("Temp: " + data.main.temp + " °F")
    $('p').eq(1).text("Wind: " + data.wind.speed + " MPH")
    $('p').eq(2).text("Humidity: " + data.main.humidity + " %")
    

    
    
   
   
    

});

// fetch weather data 
// get data attributes for popular cities (gray buttons)

// Type any city
// Click the search button
// Get user input from the search box
// Send API fetch request
// If city does not exist display message that city does not exist
// If weather results are in the response 
// Locate Current Weather City data from API within current-city div
//Locate 5 day forecast data from API within five-day-list div
// Display Current Weather City data from API within current-city div
//Display 5 day forecast data from API within five-day-list div

/*
1. Get Current Weather Data
based on a current city (San Diego)
a. Current City 
b. Current Date
c. UI Icons
c. Temperature F (eg. 74.01°)
d. Wind Speeds MPH (eg. 6.67)
e. Humidity % (eg. 67 %)
f. UV Index (eg. 0.47) 

2. Get 5 Day Forecast Data
based on a current city (San Diego)
a. Dates
b. UI Icons
c. Temperature F (eg. 74.01°)
d. Wind Speeds MPH (eg. 6.67)
e. Humidity % (eg. 67 %)



How to fetch current weather for San Diego
How to get date
How to get the forecast for San Diego

*/
