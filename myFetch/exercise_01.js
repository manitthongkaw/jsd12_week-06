const api = require("./api.js");

function getWeather(lat, lon) {
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api}`;
  return fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(
        `Found ${data.length} Call hourly historical data ${lat}/${lon}`,
      );
      console.log(data);
    })
    .catch((error) => {
      console.error("Something went wrong!", error);
    });
}

getWeather(44.34, 10.99);
