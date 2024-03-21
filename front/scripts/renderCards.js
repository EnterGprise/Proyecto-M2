document.addEventListener("DOMContentLoaded", function() {
const cardContainer = document.getElementById("cards-container");

function cardGenerator({ title, year, director, duration, genre, rate, poster }) {
  //* movie = { title, year,... }
  if (cardContainer !== null){
  const cardDiv = document.createElement("div");
  cardDiv.classList.add("movie-container");
  cardDiv.innerHTML = `
    <h3><a href="#pordefinir">${title}</a><h3>
    <h4>Año: ${year}</h4>
    <h4>Direcror: ${director}</h4>
    <h4>Duración: ${duration}</h4>
    <h4>Duración: ${genre.join(" - ")}</h4>
    <h4>Rating: ${rate}</h4>
    <img src="${poster} alt="${title}/>"
  `;
  cardContainer?.appendChild(cardDiv);
}
}
const movieData = {
  title: "Mi película",
  year: 2022,
  director: "Director Ejemplo",
  duration: "2h 30min",
  genre: ["Acción", "Aventura"],
  rate: 8.5,
  poster: "ruta/del/poster.jpg"
};

cardGenerator(movieData);
});
module.exports = cardGenerator;