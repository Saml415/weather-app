

var fiveData =
  "https://api.openweathermap.org/data/2.5/forecast?q=London&units=imperial&appid=6be0da943ba57ed80b521a05be5ca124";
var currentEl = $(".current-city");
var fiveEl = $(".five-day-box");
var cityHistory = $(".button-list");
var currentBox = document.querySelector("current-city");
var button = document.createElement("button");
var citySearch = $("#city-search");

function fetchWeather(city) {
  var currentData =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    city +
    "&units=imperial&appid=6be0da943ba57ed80b521a05be5ca124";
  fiveData =
    "https://api.openweathermap.org/data/2.5/forecast?q=" +
    city +
    "&units=imperial&appid=6be0da943ba57ed80b521a05be5ca124";

  fetch(currentData)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      currentEl
        .find("p")
        .eq(0)
        .text("Temp: " + data.main.temp + " °F");
      currentEl
        .find("p")
        .eq(1)
        .text("Wind: " + data.wind.speed + " MPH");
      currentEl
        .find("p")
        .eq(2)
        .text("Humidity: " + data.main.humidity + " %");

     
    });
  fetch(fiveData)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
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

      localStorage.setItem("city", JSON.stringify(data.city.name));
      button = document.createElement("button");
      button.setAttribute("data-city", city);
      button.setAttribute("class", "place-btn")
      button.textContent = city;
      cityHistory.append(button);
      console.log(currentData)
     
    });
}
function handleButtonClick(){
 city = $(this).attr('data-city')
 fetchWeather(city)
}

  





function handleFormSubmit(event) {
  event.preventDefault();
  var city = $("input").val();

  fetchWeather(city)
}
cityHistory.on("click", ".place-btn", handleButtonClick)
citySearch.on("submit", handleFormSubmit);


