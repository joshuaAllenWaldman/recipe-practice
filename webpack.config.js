const path = require('path');


module.exports = {
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, './recipe_tutorial/frontend/static/frontend'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  }
}