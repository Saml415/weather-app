var currentData = "https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid=6be0da943ba57ed80b521a05be5ca124"

console.log(currentData)

fetch(currentData)
.then(function(response){
    return response.json()
})

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
