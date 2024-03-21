// const DATA_BASE = {
//   movies: [
//     {
//        1,
//        "Guardians of the Galaxy Vol. 2",
//        2017,
//        "James Gunn",
//        "2h 16min",
//        ["Action", "Adventure", "Comedy"],
//        7.7,
//
//         "https://image.tmdb.org/t/p/original/y4MBh0EjBlMuOzv9axM4qJlmhzz.jpg",
//
//         "Guardians of the Galaxy Vol. 2 follows the Guardians as they struggle to keep their newfound family together while unraveling the mysteries of Peter Quill's true parentage.",
//     },
//     {
//        2,
//        "Star Wars: Episode IV - A New Hope",
//        1977,
//        "George Lucas",
//        "2h 1min",
//        ["Action", "Adventure", "Fantasy", "Sci-Fi"],
//        8.7,
//
//         "https://image.tmdb.org/t/p/original/6FfCtAuVAW8XJjZ7eWeLibRLWTw.jpg",
//
//         "Star Wars: Episode IV - A New Hope follows Princess Leia, leader of the Rebel Alliance, as she is captured by the sinister Imperial Forces in their quest to dominate the galaxy.",
//     },
//     {
//        3,
//        "The Lord of the Rings: The Fellowship of the Ring",
//        2001,
//        "Peter Jackson",
//        "2h 58min",
//        ["Action", "Adventure", "Drama", "Fantasy"],
//        8.8,
//
//         "https://image.tmdb.org/t/p/original/6oom5QYQ2yQTMJIbnvbkBL9cHo6.jpg",
//
//         "The Lord of the Rings: The Fellowship of the Ring follows a group of travelers as they embark on a perilous journey to destroy the One Ring and defeat the evil Sauron before his dark power consumes all of Middle-earth.",
//     },
//     {
//        4,
//        "Inception",
//        2010,
//        "Christopher Nolan",
//        "2h 28min",
//        ["Action", "Adventure", "Sci-Fi", "Thriller"],
//        8.8,
//
//         "https://image.tmdb.org/t/p/original/oYuLEt3zVCKq57qu2F8dT7NIa6f.jpg",
//
//         "Inception follows a skilled thief with the ability to enter people's dreams and steal their deepest secrets, who is offered a chance at redemption by performing an seemingly impossible task: implanting an idea into someone's mind.",
//     },
//     {
//        5,
//        "The Shawshank Redemption",
//        1994,
//        "Frank Darabont",
//        "2h 22min",
//        ["Drama"],
//        9.3,
//
//         "https://image.tmdb.org/t/p/original/lyQBXzOQSuE59IsHyhrp0qIiPAz.jpg",
//
//         "The Shawshank Redemption tells the story of an innocent man sentenced to two consecutive life terms in a brutal prison and ultimately finds redemption through an unlikely friendship and his own resourceful ingenuity.",
//     },
//     {
//        6,
//        "Pulp Fiction",
//        1994,
//        "Quentin Tarantino",
//        "2h 34min",
//        ["Crime", "Drama"],
//        8.9,
//
//         "https://image.tmdb.org/t/p/original/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg",
//
//         "Pulp Fiction weaves together the lives of several individuals in a series of unconventional stories involving violence, redemption, and a mysterious suitcase.",
//     },
//   ],
// };

// class Movie {
//  constructor(
//   id, title, year, director, duration, genre, rate, poster, description
//  ) {
//    if (!title || !poster || !director || !genre) {
//      throw new Error("Title, poster y director son requeridos!!!");
//    }
//    if(typeof title !== "string") {
//      throw new Error("Title debe ser un string!!!");
//  }

//    this.id = id;
//    this.title = title;
//    this.year = year;
//    this.director = director;
//    this.duration = duration;
//    this.genre = genre;
//    this.rate = rate;
//    this.poster = poster;
//    this.description = description;
//  }
// }
const Movie = require("../models/Movie");


module.exports = {
  getMovies: async () => {
    const allMovies = await Movie.find();
    return allMovies;
  },
  postMovie: async (movie) => {
    const newMovie = new Movie(movie);
    const savedMovie = await newMovie.save();
    return savedMovie;
  },

};


