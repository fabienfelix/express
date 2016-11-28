/* protractor-local.conf.js */

exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  baseUrl: 'http://localhost:8100/index.html#!/',
  specs: ['./spec/*.e2e.js'],
  maxSessions: 1,
  framework: 'jasmine2',
  jasmineNodeOpts: {
	showColors: true,
	includeStackTrace: true
  },
  multiCapabilities: [{ browserName: 'chrome' }]
};