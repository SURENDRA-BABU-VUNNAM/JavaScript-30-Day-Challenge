let current_location = document.querySelector("#location");
let current_weather = document.querySelector("#current-weather");
let temperature = document.querySelector("#temperature");
let humidity = document.querySelector("#humidity");
let form = document.querySelector("#weather_form");
let container = document.querySelector(".container");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  let city = document.querySelector("#search").value;

  let units = "meteric";

  let weather_promise = new Promise((resolve, reject) => {
    let API_KEY = "327c66e84f32c9027e3689fffb88eb6c";
    let url = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&cnt=5&units=metric&appid=${API_KEY}`;
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
      // list
      let list = data.list;

      let weather_card = document.createElement("div");
      weather_card.setAttribute("id", "weather_card");

      let div_container = document.createElement("div");
      div_container.setAttribute("id", "weather_container");
      container.appendChild(div_container);

      for (i = 0; i < list.length; i++) {
        let div_card = document.createElement("div");
        div_card.setAttribute(`id`, `card_${i}`);
        div_container.appendChild(div_card);

        // date-time

        let time = new Date(list[i].dt * 1000);
        time = time.toLocaleString();

        let time_para = document.createElement("p");
        time_para.innerText = time;
        div_card.appendChild(time_para);

        // current temperature

        let h2 = document.createElement("h2");
        h2.innerHTML = `${list[i].main.temp}<sup>o</sup> C`;
        div_card.appendChild(h2);

        // emoji

        let img = document.createElement("img");
        img.setAttribute(
          "src",
          `http://openweathermap.org/img/wn/${list[i].weather[0].icon}@2x.png`
        );
        div_card.appendChild(img);

        // description

        let description_para = document.createElement("p");
        description_para.setAttribute("id", "description_para");
        description_para.innerHTML = `<span>${list[i].weather[0].main} :</span><span>${list[i].weather[0].description}</span>`;

        div_card.appendChild(description_para);

        // humidity

        let humidity_para = document.createElement("p");
        humidity_para.setAttribute("id", "humidity_para");
        humidity_para.innerText = `${list[i].main.humidity} %`;
        div_card.appendChild(humidity_para);
      }
    } catch (error) {
      console.log(error);
    }
  }
  reply();
});
