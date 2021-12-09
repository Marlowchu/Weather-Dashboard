var apiKey = "38c24f4dc2ab517bfecb61f647cc5fa7";
var city 
var display
var display2
var lat
var lon

var humidity 
var temp
var wind
var uv
var cityName
var weatherIcon


var inputEl = $('#input');
var searchEl = $('#btn');

var iconEl = document.querySelector(".icon")



// button click
searchEl.on('click', function () {
        
    // take the input and save it to be passed to api call
    city = document.getElementById("input").value;

    apiCall ()
    
  });


function apiCall() {

    var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=" + apiKey;
    fetch(queryURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {

      // grab the video Id from response and save it
    //   vidId = data.items[0].id.videoId
        display = data
        
        lat = display.coord.lat
        lon = display.coord.lon
        
      console.log(display)

     

      apiCall2 ()
          })
}


function apiCall2() {

     var queryURL2 = "https://api.openweathermap.org/data/2.5/onecall?lat="+lat+"&lon="+lon+"&units=imperial&appid=" + apiKey;
    fetch(queryURL2)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {

      // grab the video Id from response and save it
    //   vidId = data.items[0].id.videoId
        display2 = data
        

      console.log(display2)


      cityName = display.name
      temp = display.main.temp
      humidity = display.main.humidity
      wind = display.wind.speed
      uv = display2.current.uvi
      weatherIcon = display2.current.weather[0].icon

      console.log(cityName)
      console.log(Math.floor(temp) + " ℉")
      console.log(humidity+ "%")
      console.log(Math.floor(wind) +" MPH");
      console.log(uv)
      console.log(weatherIcon)

      
      for ( i = 0; i < 5; i++) {
          
        console.log (Math.floor(display2.daily[i].temp.day)+ " ℉");
        console.log (display2.daily[i].humidity+"%");
        console.log (display2.daily[i].uvi);
        console.log (Math.floor(display2.daily[i].wind_speed)+" MPH");
          
      }




          })
}

// var .replaceAll ()
// const icon = `http://openweathermap.org/img/wn/${iconId}@2x.png`;
//  iconEl.innerHTML = `<img src=${pic}/>`



// city name display.name
// humidity, 
// wind speed, 
// UV index


// ## Acceptance Criteria

// ```
// GIVEN a weather dashboard with form inputs
// WHEN I search for a city
// THEN I am presented with current and future conditions for that city and that city is added to the search history
// WHEN I view current weather conditions for that city
// THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, the wind speed, and the UV index
// WHEN I view the UV index
// THEN I am presented with a color that indicates whether the conditions are favorable, moderate, or severe
// WHEN I view future weather conditions for that city
// THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, the wind speed, and the humidity
// WHEN I click on a city in the search history
// THEN I am again presented with current and future conditions for that city