var debug = process.env.NODE_ENV !== "production"; // debug is true if its not production mode
var webpack = require('webpack');

module.exports = {
  context: __dirname,
  devtool: debug ? "inline-sourcemap" : null, // if it is not production mode, then use inline-sourcemap
  entry: "./js/scripts.js", // start point
  output: {
    path: __dirname + "/js",
    filename: "scripts.min.js"
  },
  plugins: debug ? [] : [ // if debug mode , thne no plugins, empty array 
    new webpack.optimize.DedupePlugin(),//Dedupe shred out duplicate code
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
  ],
};  