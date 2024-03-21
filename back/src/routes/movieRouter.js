const { getMovies, postMovie } = require("../controllers/movieController.js");
const express = require("express");
const movieRouter = express.Router();

movieRouter.get("/", getMovies);
movieRouter.post("/", postMovie);

module.exports = movieRouter;