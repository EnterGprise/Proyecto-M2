const cors = require("cors");
const express = require("express");
const morgan = require("morgan");
const movieRouter = require("./routes/movieRouter");
const homeRouter = require("./routes/homeRouter");

const app = express();


//* MIDDLEWARES
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.use("/", homeRouter);
app.use("/movies", movieRouter);

module.exports = app;