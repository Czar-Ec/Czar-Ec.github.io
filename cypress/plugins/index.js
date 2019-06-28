const webpack = require("@cypress/webpack-preprocessor");

module.exports = on => {
  const options = {
    webpackOptions: require("./cy-ts-preprocessor")
  };
  on("file:preprocessor", webpack(options));
};
