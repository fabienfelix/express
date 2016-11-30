

SETUP Protractor on local host:
	
	Launch a terminal and :
		> npm install -g protractor
		> protractor --version
		> webdriver-manager update
		
TESTS :

	Launch Selenium's server :
		> webdriver-manager start
		
	Check if selenium server is running :
		http://localhost:4444/wd/hub
		
	Then launch your website server (ie tomcat gndformsWeb)
		
	For run the tests :
		Open a terminal in "C:\git\gndforms\gndformsWeb\src\test\javascript\e2e" and paste :
		> protractor local.conf.js

		