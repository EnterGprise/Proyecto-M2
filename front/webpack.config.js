const path = require('path');
const outputPath = path.resolve(__dirname, "public");

module.exports = {
  entry: "./scripts/index.js",
  output: {
    path: outputPath,
    filename: "bundle.js",
  },
};
