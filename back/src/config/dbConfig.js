const mongoose = require("mongoose");
require("dotenv").config();

const dbConfig = async () => {
  //* La conexión "ES UNA PROMESA"
  //console.log(process.env.MONGODB_URI);
  await mongoose.connect(process.env.MONGODB_URI);
}


module.exports = dbConfig;