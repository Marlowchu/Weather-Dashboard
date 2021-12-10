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
var icon


var dayHumidity 
var dayTemp
var dayWind
var dayUv
var dayDate

var inputEl = $('#input');
var searchEl = $('#btn');


var cityNameEl = document.querySelector("#cityName")
var iconEl = document.querySelector("#icon")
var tempEl = document.querySelector("#temp")
var humidityEl = document.querySelector("#humidity")
var windEl = document.querySelector("#wind")
var uvEl = document.querySelector("#uv")

var dayDateEl = document.querySelector("#dayDate")
var dayTempEl = document.querySelector("#dayTemp")
var dayHumidityEl = document.querySelector("#dayHumidity")
var dayWindEl = document.querySelector("#dayWind")
var dayUvEl = document.querySelector("#dayUv")

var dayDateEl1 = document.querySelector("#dayDate1")
var dayTempEl1 = document.querySelector("#dayTemp1")
var dayHumidityEl1 = document.querySelector("#dayHumidity1")
var dayWindEl1 = document.querySelector("#dayWind1")
var dayUvEl1 = document.querySelector("#dayUv1")

var dayDateEl2 = document.querySelector("#dayDate2")
var dayTempEl2 = document.querySelector("#dayTemp2")
var dayHumidityEl2 = document.querySelector("#dayHumidity2")
var dayWindEl2 = document.querySelector("#dayWind2")
var dayUvEl2 = document.querySelector("#dayUv2")

var dayDateEl3 = document.querySelector("#dayDate3")
var dayTempEl3 = document.querySelector("#dayTemp3")
var dayHumidityEl3 = document.querySelector("#dayHumidity3")
var dayWindEl3 = document.querySelector("#dayWind3")
var dayUvEl3 = document.querySelector("#dayUv3")

var dayDateEl4 = document.querySelector("#dayDate4")
var dayTempEl4 = document.querySelector("#dayTemp4")
var dayHumidityEl4 = document.querySelector("#dayHumidity4")
var dayWindEl4 = document.querySelector("#dayWind4")
var dayUvEl4 = document.querySelector("#dayUv4")

var recentEl = document.querySelector("#history")

var result = []

var resultlocal = []

var resultDisplay =[]

var resultDisplaylocal =[]

// history ()

// button click
searchEl.on('click', function () {
        
    // take the input and save it to be passed to api call
    city = document.getElementById("input").value;
    //  result.push(city);
    // var recent = JSON.stringify (result);
    // localStorage.setItem("key", recent)
// call funtions
    apiCall ()
    
  });


function apiCall() {


console.log("hello people")
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
        
        // resultDisplay.push(display);

        // var recent = JSON.stringify (resultDisplay);
        // localStorage.setItem("display", recent)


      console.log(display)

      var datecode = display.dt
     

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

      var weatherIcon = display2.current.weather[0].icon
      cityName = display.name
       icon = `<img id="icon"  class="col-md-12 name icon"  src="http://openweathermap.org/img/wn/${weatherIcon}@2x.png" alt="">`
      temp = Math.floor(display.main.temp) + " ℉";
      humidity = Math.floor(display.main.humidity) + "% H";
      wind = Math.floor(display.wind.speed) +" MPH";
      uv = display2.current.uvi + " Index"
      

      console.log(cityName)
      console.log(Math.floor(temp) + " ℉")
      console.log(humidity+ "%")
      console.log(Math.floor(wind) +" MPH");
      console.log(uv)
    //   console.log(weatherIcon)

      
      for ( i = 0; i < 5; i++) {
          
        if (i==0) {
            
        dayDate = new Date( (display2.daily[i].dt) * 1000).toDateString();
        dayDateEl.textContent = dayDate    
        dayTemp = (Math.floor(display2.daily[i].temp.day)+ " ℉");
        dayTempEl.textContent = dayTemp
        dayHumidity = (display2.daily[i].humidity+"%");
        dayHumidityEl.textContent = dayHumidity
        dayUv = (display2.daily[i].uvi) + " Index";
        dayUvEl.textContent = dayUv
        dayWind = (Math.floor(display2.daily[i].wind_speed)+" MPH");
        dayWindEl.textContent = dayWind

        }
        
        if (i==1) {
            
            dayDate = new Date( (display2.daily[i].dt) * 1000).toDateString();
            dayDateEl1.textContent = dayDate
            dayTemp = (Math.floor(display2.daily[i].temp.day)+ " ℉");
            dayTempEl1.textContent = dayTemp
            dayHumidity = (display2.daily[i].humidity+"%");
            dayHumidityEl1.textContent = dayHumidity
            dayUv = (display2.daily[i].uvi) + " Index";
            dayUvEl1.textContent = dayUv
            dayWind = (Math.floor(display2.daily[i].wind_speed)+" MPH");
            dayWindEl1.textContent = dayWind
    
            }

            if (i==2) {
            
                dayDate = new Date( (display2.daily[i].dt) * 1000).toDateString();
                dayDateEl2.textContent = dayDate
                dayTemp = (Math.floor(display2.daily[i].temp.day)+ " ℉");
                dayTempEl2.textContent = dayTemp
                dayHumidity = (display2.daily[i].humidity+"%");
                dayHumidityEl2.textContent = dayHumidity
                dayUv = (display2.daily[i].uvi) + " Index";
                dayUvEl2.textContent = dayUv
                dayWind = (Math.floor(display2.daily[i].wind_speed)+" MPH");
                dayWindEl2.textContent = dayWind
        
                }

                if (i==3) {
                    
                    dayDate = new Date( (display2.daily[i].dt) * 1000).toDateString();
                    dayDateEl3.textContent = dayDate
                    dayTemp = (Math.floor(display2.daily[i].temp.day)+ " ℉");
                    dayTempEl3.textContent = dayTemp
                    dayHumidity = (display2.daily[i].humidity+"%");
                    dayHumidityEl3.textContent = dayHumidity
                    dayUv = (display2.daily[i].uvi) + " Index";
                    dayUvEl3.textContent = dayUv
                    dayWind = (Math.floor(display2.daily[i].wind_speed)+" MPH");
                    dayWindEl3.textContent = dayWind
            
                    }


                    if (i==4) {
                        dayDate = new Date( (display2.daily[i].dt) * 1000).toDateString();
                        dayDateEl4.textContent = dayDate
                        dayTemp = (Math.floor(display2.daily[i].temp.day)+ " ℉");
                        dayTempEl4.textContent = dayTemp
                        dayHumidity = (display2.daily[i].humidity+"%");
                        dayHumidityEl4.textContent = dayHumidity
                        dayUv = (display2.daily[i].uvi) + " Index";
                        dayUvEl4.textContent = dayUv
                        dayWind = (Math.floor(display2.daily[i].wind_speed)+" MPH");
                        dayWindEl4.textContent = dayWind
                
                        }




      }

      displayBoxes()


          })
}



function displayBoxes() {

    cityNameEl.textContent = cityName
    iconEl.innerHTML = icon
    tempEl.textContent = temp
    humidityEl.textContent = humidity
    windEl.textContent = wind
    uvEl.textContent = uv
    
    // var date =new Date( datecode * 1000).toDateString()
//    history ()
}



// function history () {


//     resultlocal = localStorage.getItem("key")
//     resultlocal = JSON.parse(resultlocal);
//     resultlocal.forEach(i => {
//     //     console.log(i)
//     //     recentEl
//     // var rsearch = document.createTextNode = `<button class="btn" onclick="apiCall">${i}</button>`
//     //     document.body.appendChild (rsearch)

        
//     const para = document.createElement("button");
//     const node = document.createTextNode(i);
//     para.setAttribute("onclick", "apiCall3()");
//     para.setAttribute("id", i);
//     para.appendChild(node);
//     const element = document.getElementById("history");
//     element.appendChild(para);
//     });
//     // recentEl.innerHTML = `<button class="btn" onclick="apiCall">${i}</button>`
    





    
// }





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