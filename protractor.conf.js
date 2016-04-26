exports.config = {
	capabilities: 
		// {
		// 	'browserName': 'phantomjs',
		// 	'phantomjs.binary.path': require('phantomjs').path,
		// 
		// 	/*
		// 	* Command line args to pass to ghostdriver, phantomjs's browser driver.
		// 	* See https://github.com/detro/ghostdriver#faq
		// 	*/
		// 	'phantomjs.ghostdriver.cli.args': ['--loglevel=DEBUG']
		// },
		{
			browserName: 'chrome',
			name: 'Unnamed Job',
			count: 1,
			shardTestFiles: false,
			maxInstances: 10,
			chromeOptions: {
				'mobileEmulation': {
					'deviceName': 'Google Nexus 5'
				},
				args: [
					'disable-extensions'
				]
    	}
		},
	
  // set to "custom" cause 'protractor-cucumber-framework' plugin.
  framework: 'custom',
	baseUrl: 'http://localhost:3000/',
  // path relative to the current config file
  frameworkPath: require.resolve('protractor-cucumber-framework'),

	// Spec patterns are relative to this directory.
  specs: [
    'e2e/features/*.feature'
  ],
  // relevant cucumber command line options
  cucumberOpts: {
		compiler: "ts:ts-node/register",
		require: "e2e/**/*.steps.ts",
		format: "pretty"
		// Only execute the features or scenarios with tags matching @dev.
    // This may be an array of strings to specify multiple tags to include.
    //,tags: '@dev'
  }
};