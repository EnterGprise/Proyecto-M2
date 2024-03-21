
const axios = require ("axios");

 function validateForm({
    title, year , director, duration, genre, rate, poster
 }) {
    if(!title || !year || !director || !duration || !genre[0] || !rate || !poster )
      return "Todos los campos son obligatorios";
    if(director.length <5 || director.length > 50)
      return "Director debe contener entre 5 y 50 caracteres";
    if (isNaN(rate) || rate < 1 || rate > 10)
      return "El rating debe ser un numero entre 1 y 10";
    if (!poster.includes("https://"))
      return "El poster debe ser una URL valida";
    return null;
 }

 function createMovie(event){
    event.preventDefault();
    

    //Obtener desde HTML, los valores que el usuario valla ingresando en los campos.
    //-> Interaccion con el DOM
    const title = document.getElementById("title").value;
    const year = document.getElementById("year").value;
    const director = document.getElementById("director").value;
    const duration = document.getElementById("duration").value;
    const genre = document.getElementById("genre").value.split(" ");
    // Action Comedy > [Action, Comedy]
    const rate = document.getElementById("rate").value;
    const poster = document.getElementById("poster").value;

    const newMovie= {title, year , director, duration, genre, rate, poste};

    //^* VALIDAR DATOS

    const error = validateForm ({newMovie});
    // mensaje ll null
    if(error) return alert (error);

    //Petición al Back
    return alert ("Datos Correctos");
    
    axios
      .post ("http://localhost:3000/movies", newMovie)
      .then (()=> alert ("Pelicula creada!"))
      .cath((error) => alert ("Error al crear la Pelicula"));
}

 module.exports = createMovie;
