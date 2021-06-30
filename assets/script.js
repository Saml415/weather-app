var fiveData =
  "https://api.openweathermap.org/data/2.5/forecast?q=London&units=imperial&appid=6be0da943ba57ed80b521a05be5ca124";
var currentEl = $(".current-city");
var fiveEl = $(".five-day-box");
var cityHistory = $(".button-list");
var currentBox = document.querySelector("current-city");
var button = document.createElement("button");
var citySearch = $("#city-search");
var today = moment().format('(MM/DD/YYYY)')
var day1 = moment().add(1 ,'d' ).format('(MM/DD/YYYY)')
var day2 = moment().add(2 ,'d' ).format('(MM/DD/YYYY)')
var day3 = moment().add(3 ,'d' ).format('(MM/DD/YYYY)')
var day4 = moment().add(4 ,'d' ).format('(MM/DD/YYYY)')
var day5 = moment().add(5 ,'d' ).format('(MM/DD/YYYY)')
console.log(day1)
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
      var iconUrl =
        "http://openweathermap.org/img/wn/" + data.weather[0].icon + "@2x.png";

      var iconImg = $("<img>").attr({
        src: iconUrl,
        alt: data.weather[0].description,
      });

      
      $(".current-city img").remove()
      $(".current-city").append(iconImg);
      currentEl.find("h2").text(data.name +today) ;
    });
  fetch(fiveData)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      var iconUrl =
        "http://openweathermap.org/img/wn/" +
        data.list[0].weather[0].icon +
        "@2x.png";

      var iconImg = $("<img>").attr({
        src: iconUrl,
        alt: data.list[0].description,
      });

      var iconUrl1 =
        "http://openweathermap.org/img/wn/" +
        data.list[1].weather[0].icon +
        "@2x.png";

      var iconImg1 = $("<img>").attr({
        src: iconUrl1,
        alt: data.list[1].description,
      });

      var iconUrl2 =
        "http://openweathermap.org/img/wn/" +
        data.list[2].weather[0].icon +
        "@2x.png";

      var iconImg2 = $("<img>").attr({
        src: iconUrl2,
        alt: data.list[2].description,
      });

      var iconUrl3 =
        "http://openweathermap.org/img/wn/" +
        data.list[3].weather[0].icon +
        "@2x.png";

      var iconImg3 = $("<img>").attr({
        src: iconUrl3,
        alt: data.list[3].description,
      });

      var iconUrl4 =
        "http://openweathermap.org/img/wn/" +
        data.list[4].weather[0].icon +
        "@2x.png";

      var iconImg4 = $("<img>").attr({
        src: iconUrl4,
        alt: data.list[4].description,
      });

      // $(".five-day-box").find("p").eq(0).append(iconImg)
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
        .text("Humidity: " + data.list[1].main.humidity + " %")
        .append(iconImg).append(day1);

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
        .text("Humidity: " + data.list[9].main.humidity + " %")
        .append(iconImg1).append(day2);

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
        .text("Humidity: " + data.list[17].main.humidity + " %")
        .append(iconImg2).append(day3);

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
        .text("Humidity: " + data.list[25].main.humidity + " %")
        .append(iconImg3).append(day4);

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
        .text("Humidity: " + data.list[33].main.humidity + " %")
        .append(iconImg4).append(day5);

      localStorage.setItem("city", JSON.stringify(data.city.name));

      button = document.createElement("button");
      button.setAttribute("data-city", city);
      button.setAttribute("class", "place-btn");
      button.textContent = city;
      cityHistory.append(button);
      console.log(fiveData);
    });
}
function handleButtonClick() {
  city = $(this).attr("data-city");

  fetchWeather(city);
}

function handleFormSubmit(event) {
  event.preventDefault();
  var city = $("input").val();

  fetchWeather(city);
}
cityHistory.on("click", ".place-btn", handleButtonClick);
citySearch.on("submit", handleFormSubmit);
