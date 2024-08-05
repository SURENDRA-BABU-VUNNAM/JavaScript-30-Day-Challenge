// let API_KEY = "327c66e84f32c9027e3689fffb88eb6c";
// let city = "Bellary";
// let units = "meteric";
// let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&appid=${API_KEY}`;

// let current_location = document.querySelector("#location");
// let current_weather = document.querySelector("#current-weather");
// let temperature = document.querySelector("#temperature");
// let humidity = document.querySelector("#humidity");

// let weather_promise = new Promise((resolve, reject) => {
//   fetch(url)
//     .then((response) => response.json())
//     .then((data) => resolve(data))
//     .catch((error) => reject(error));
// });

// async function reply() {
//   try {
//     let data = await weather_promise;
//     current_location.innerText = data.name;
//     temperature.innerHTML = `${(data.main.temp - 273.15).toFixed(
//       2
//     )}<span>&deg;C</span>`;
//     humidity.innerText = `${data.main.humidity}%`;
//     console.log(data.weather)
//     current_weather.innerHTML = `    <img src="http://openweathermap.org/img/w/${data.weather[0].icon}.png" alt="${data.weather[0].main}">
//     <h2>${data.weather.main}</h2>
//     <p>${data.weather.description}</p>`;
//   } catch (error) {
//     console.log(error);
//   }
// }

// reply();

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
        
    } catch (error) {
      console.log(error);
    }
  }
  reply();
});
