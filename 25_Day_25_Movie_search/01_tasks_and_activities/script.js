let container = document.querySelector(".container");

let form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  let movie = document.querySelector("input").value;
  movie_fetch(movie);
});

// fetch data from movie
function movie_fetch(movie) {
  let movie_promise = new Promise((resolve, reject) => {
    const API_KEY = "8fdea641";
    const url = `http://www.omdbapi.com/?t=${movie}&apikey=${API_KEY}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => resolve(data))
      .catch((error) => reject(error));
  });

  async function movie_database() {
    try {
      let data = await movie_promise;
      movie_card(data);
    } catch (error) {
      console.log(error);
      return null;
    }
  }
  movie_database();
}

// generate movie card

function movie_card(data) {
  // movie card generation

  let movie_card = document.createElement("div");
  movie_card.setAttribute("id", "movie_card");
  container.appendChild(movie_card);

  // title generation

  let title = document.createElement("h2");
  title.setAttribute("id", "title");
  title.innerText = data.Title;
    movie_card.appendChild(title);
    
    // poster generation
  let image_div = document.createElement("div")
  image_div.setAttribute("id", "image_div")
  movie_card.appendChild(image_div)

  let image_poster = document.createElement("img")
  image_poster.setAttribute("src", data.Poster)
  image_div.appendChild(image_poster)
  
  // plot 
  let plot = document.createElement("p")
  plot.setAttribute("id", "plot")
  plot.innerText = data.Plot
  movie_card.appendChild(plot)

  // cast 
  let actors = document.createElement("p")
  actors.setAttribute("id", "cast")
  actors.innerText = data.Actors
  movie_card.appendChild(actors)

  
}
