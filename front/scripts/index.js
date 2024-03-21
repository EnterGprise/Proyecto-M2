const cardGenerator = require("./renderCards.js");
// const URL = "https://students-api.2.us-1.fl0.io/movies";
const URL = "http://localhost:3000/movies";
const axios = require("axios");

// function getMovies() {
//   axios
//     .get(URL) //* Retorna => Instancia de promesa
//     .then(response => 
//       response.data.map(movie => cardGenerator(movie))
//     ) //* response = { ..., data: [ { 1 }, { 2 }, { 3 } ] }
//     .catch(error => alert(error.message)); //* error = { ..., message: Aquí el error }
// }

const getMovies = async () => {
  try {
    const { data } = await axios.get(URL);
    data.map(movie => cardGenerator(movie));
  } catch ({ message }) {
    alert(message);
  }
}

document.addEventListener("DOMContentLoaded",() => {
  getMovies();
  const submit = document.getElementById("movieForm");
  submit?.addEventListener ("submit", createMovie);
  console.log("Versión 1.0.7 - Conectado con nuestro Back");
  console.log("Formulario para crear nueva pelicula");
  


})

