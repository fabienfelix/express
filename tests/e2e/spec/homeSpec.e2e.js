var globalFunction = require('../function/globalFunction.e2e.js');
var genericTestFunction = require('../function/genericTestFunction.e2e.js');

var HomeScreen = require('../screen/homeScreen.e2e.js');

describe('Home --> ', function() {
  
	var homeScreen = new HomeScreen();
	
	beforeAll(function(){
		console.log('\n >>>>>>  Test Home');
	});
	
	beforeEach(function() {
		globalFunction.connect();
	});
	
	it('correct url', function() {
		genericTestFunction.url.expect();
	});

	it('test is present', function() {
		expect(homeScreen.textTest.isPresent()).toBe(true);
	});
	
});
