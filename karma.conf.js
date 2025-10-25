// karma.conf.js
module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage')
    ],
    client: {
      clearContext: false
    },
    coverageReporter: {
      dir: require('path').join(__dirname, 'coverage', 'websiteportfolio'),
      reporters: [
        { type: 'html' },        // HTML coverage report
        { type: 'lcovonly', subdir: '.', file: 'lcov.info' }, // lcov report for codecov
        { type: 'text-summary', subdir: '.', file: 'text-summary.txt' } // console summary saved to file
      ],
      includeAllSources: true
    },
    reporters: ['progress', 'kjhtml', 'coverage'],
    browsers: ['ChromeHeadless'],
    singleRun: true,
    restartOnFileChange: false
  });
};
