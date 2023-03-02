let weather = [];

async function getWeather(country) {
  let res = await fetch(
    `https://api.weatherapi.com/v1/forecast.json?key=ea696ea3b8434a8f981142905222412 &q=${country}&q=07112&days=3`
  );
  let result = await res.json();
  weather = result;
  console.log(weather);
  displayApi();
}
getWeather("cairo");

function displayApi() {
  let html = "";
  html = `
           <div class="col-md-4 ">
              <div class="all   p-3">
                <div class="content  d-flex justify-content-between text-white">
                  <p class=''>
                  ${toDay}
                  </p>
                  <p>${weather.location.localtime} </p>
                </div>
                <div class="status">
                  <h4 class='country'> ${weather.location.name},${weather.location.country} </h4>
                  <h3>${weather.current.temp_c}°C</h3>
                  <img src=" ${weather.current.condition.icon}" alt="weather" />
                  <p class="wind">${weather.current.condition.text} </p>
                  <div class="power d-flex">
                    <p><i class="fa-solid fa-umbrella"></i> ${weather.current.wind_mph}% </p>
                    <p class="mx-3"><i class="fa-solid fa-wind"></i> ${weather.current.wind_kph} km/h</p>
                    <p c><i class="fa-solid fa-compass"></i> ${weather.current.wind_dir}</p>
                  </div>
                </div>
              </div>
            </div>
  <div class="col-md-4 second">
              <div class="all  rounded p-3">
                <div class="content text-center text-white">
                  <p class=''> ${tommorowDay}</p>
                  <p class=''>${weather.forecast.forecastday[1].date}</p>
                </div>
                <div class="status">
                  <h3>${weather.forecast.forecastday[1].day.maxtemp_c}°C </h3>
                  <h5>${weather.forecast.forecastday[1].day.mintemp_c}°C </h5>
                  <img src=" ${weather.forecast.forecastday[1].day.condition.icon}" alt="weather" />
                  <p class='wind ' >${weather.forecast.forecastday[1].day.condition.text} </p>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="all  rounded p-3">
                <div class="content text-center text-white">
                  <p class=''>${afterTommorow}</p>
                  <p class=''>${weather.forecast.forecastday[2].date}</p>
                </div>
                <div class="status">
                  <h3>${weather.forecast.forecastday[2].day.maxtemp_c}°C </h3>
                  <h5>${weather.forecast.forecastday[2].day.mintemp_c}°C </h5>
                  <img src=" ${weather.forecast.forecastday[2].day.condition.icon}" alt="weather" />
                  <p class="wind">${weather.forecast.forecastday[2].day.condition.text} </p>
                </div>
              </div>
            </div>
          <div class="col-md-12 astro rounded-bottom">
          <div class=" d-flex justify-content-around text-center pt-2 ">
            <p>
              <img
                src="weather/weather/64x64/day/113.png"
                class="w-25"
                alt=""
              />sun rise :
        <span>${weather.forecast.forecastday[0].astro.sunrise}</span>

            </p>
            <p>
              <img
                src="weather/weather/64x64/day/116.png"
                class="w-25"
                alt=""
              />
              sunset:
        <span>${weather.forecast.forecastday[0].astro.sunset}</span>

            </p>
            <p>
              <img
                src="weather/weather/64x64/night/116.png"
                class="w-25"
                alt=""
              />
              moonrise:
        <span>${weather.forecast.forecastday[0].astro.moonrise}</span>

            </p>
            <p>
              <img
                src="weather/weather/64x64/night/119.png"
                class="w-25"
                alt=""
              />
              moonset:
        <span>${weather.forecast.forecastday[0].astro.moonset}</span>

            </p>
          </div>
        </div>

            </div>
      `;
  document.querySelector(".row").innerHTML = html;
}

function searchApi(country) {
  getWeather(country);
}

var dayName = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let tomorrow = new Date();
tomorrow.setTime(tomorrow.getTime() + 1000 * 3600 * 24);

let tommorowDay = dayName[tomorrow.getDay()];

let today = new Date();
today.setTime(today.getTime() + 1000 * 3600);

let toDay = dayName[today.getDay()];

let aftertommorow = new Date();
aftertommorow.setTime(aftertommorow.getTime() + 1000 * 3600 * 48);

let afterTommorow = dayName[aftertommorow.getDay()];
