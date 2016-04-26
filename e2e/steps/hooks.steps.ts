export = function (){
	var hook = <cucumber.Hooks>this;
  hook.Before(function(){
		browser.ignoreSynchronization = true;
	});
  
	hook.setDefaultTimeout(10*1000);	
	
  hook.registerHandler('BeforeFeatures', function (event, callback) { //runs before any scenario is executed
    callback();
  });

	hook.registerHandler('AfterFeatures', function (event, callback) { //runs after ALL features are executed
    callback();
  });
}