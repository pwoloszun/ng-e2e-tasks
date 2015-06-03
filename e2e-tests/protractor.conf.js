exports.config = {
  allScriptsTimeout: 11000,

  specs: [
    './**/*-spec.js'
  ],

  capabilities: {
    'browserName': 'chrome'
    //'browserName': 'firefox'
  },

  baseUrl: 'http://localhost:8000/app/',
  //seleniumAddress: 'http://localhost:4444/wd/hub',

  framework: 'jasmine2',

  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  }
};
