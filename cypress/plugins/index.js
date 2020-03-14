const webpack = require("@cypress/webpack-preprocessor");

module.exports = on => {
  require('cypress-plugin-retries/lib/plugin')(on)
  const options = {
    webpackOptions: require("./cy-ts-preprocessor")
  };
  on("file:preprocessor", webpack(options));
};
