let current_location = document.querySelector("#location");
let current_weather = document.querySelector("#current-weather");
let temperature = document.querySelector("#temperature");
let humidity = document.querySelector("#humidity");
let form = document.querySelector("#weather_form");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  let city = document.querySelector("#search").value;
  let API_KEY = "327c66e84f32c9027e3689fffb88eb6c";
  let units = "meteric";
  let url = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&cnt=5&units=metric&appid=${API_KEY}`;

  let weather_promise = new Promise((resolve, reject) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => resolve(data))
      .catch((error) => reject(error));
  });

  async function reply() {
    try {
      // the main title
      let data = await weather_promise;
      current_location.innerText = data.city.name;
      let weather_container = document.querySelector("#weather_container");
      // list removal
      let list = data.list;
      let weather_card = document.createElement("div");
      weather_card.setAttribute("id", "weather_card");
      weather_card.innerHTML = `
        <p>${new Date(list[i].main.dt).toLocaleString}</p>
        <h2>${list[i].main.temp - 273.15}</h2>
        <img src="http://openweathermap.org/img/w/${
          list[i].weather[0].icon
        }.png" alt="${list[i].weather[0].main}">
        
      temperature.innerHTML = ${(list[i].main.temp - 273.15).toFixed(
        2
      )}<span>&deg;C</span>;
      humidity.innerText = ${list[i].main.humidity}%;
      current_weather.innerHTML = <img src="http://openweathermap.org/img/w/${
        data.weather[0].icon
      }.png" alt="${list[i].weather[0].main}">
          <span>${list[i].weather[0].main}</span>:<span>${
        list[i].weather[0].description
            }</span>`;
        
        weather_container.appendChild(weather_card)
    } catch (error) {
      console.log(error);
    }
  }
  reply();
});
