var currentData =
  "https://api.openweathermap.org/data/2.5/onecall?lat=51.49&lon=-0.13&exclude=hourly,daily&units=imperial&appid=6be0da943ba57ed80b521a05be5ca124";
var fiveData =
  "https://api.openweathermap.org/data/2.5/forecast?q=London&units=imperial&appid=6be0da943ba57ed80b521a05be5ca124";
var currentEl = $(".current-city");
var fiveEl = $(".five-day-box");

var currentBox = document.querySelector("current-city");

console.log(fiveEl);

var citySearch = $("#city-search");
function handleFormSubmit(event) {
  event.preventDefault();
  var city = $('input[name="city-search"]').val();
  fiveData =
  "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&units=imperial&appid=6be0da943ba57ed80b521a05be5ca124";

  console.log("Hello");

  fetch(currentData)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);

      $("p")
        .eq(0)
        .text("Temp: " + data.current.temp + " °F");
      $("p")
        .eq(1)
        .text("Wind: " + data.current.wind_speed + " MPH");
      $("p")
        .eq(2)
        .text("Humidity: " + data.current.humidity + " %");
      $("p")
        .eq(3)
        .text("UV Index: " + data.current.uvi);
    });

  fetch(fiveData)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      currentEl.find("h2").text(data.city.name);
      fiveEl.find("h3").text(data.city.name);
      fiveEl
        .find("p")
        .eq(0)
        .text("Temp: " + data.list[1].main.temp + " °F");
      fiveEl
        .find("p")
        .eq(1)
        .text("Wind: " + data.list[1].wind.speed + " MPH");
      fiveEl
        .find("p")
        .eq(2)
        .text("Humidity: " + data.list[1].main.humidity + " %");

      fiveEl
        .find("p")
        .eq(3)
        .text("Temp: " + data.list[9].main.temp + " °F");
      fiveEl
        .find("p")
        .eq(4)
        .text("Wind: " + data.list[9].wind.speed + " MPH");
      fiveEl
        .find("p")
        .eq(5)
        .text("Humidity: " + data.list[9].main.humidity + " %");

      fiveEl
        .find("p")
        .eq(6)
        .text("Temp: " + data.list[17].main.temp + " °F");
      fiveEl
        .find("p")
        .eq(7)
        .text("Wind: " + data.list[17].wind.speed + " MPH");
      fiveEl
        .find("p")
        .eq(8)
        .text("Humidity: " + data.list[17].main.humidity + " %");

      fiveEl
        .find("p")
        .eq(9)
        .text("Temp: " + data.list[25].main.temp + " °F");
      fiveEl
        .find("p")
        .eq(10)
        .text("Wind: " + data.list[25].wind.speed + " MPH");
      fiveEl
        .find("p")
        .eq(11)
        .text("Humidity: " + data.list[25].main.humidity + " %");

      fiveEl
        .find("p")
        .eq(12)
        .text("Temp: " + data.list[33].main.temp + " °F");
      fiveEl
        .find("p")
        .eq(13)
        .text("Wind: " + data.list[33].wind.speed + " MPH");
      fiveEl
        .find("p")
        .eq(14)
        .text("Humidity: " + data.list[33].main.humidity + " %");
    });
}

citySearch.on("submit", handleFormSubmit);

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
