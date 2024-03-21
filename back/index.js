const dbConfig = require("./src/config/dbConfig.js");
const app = require("./src/server.js");


 PORT = 3000;

const startServer = async () => {
  try {
     await dbConfig();
     app.listen(PORT, () => {
      console.log(`Server listening on http://localhost:${PORT}`)
    });
  } catch (error) {
    console.log(error);
  }
};
  startServer();