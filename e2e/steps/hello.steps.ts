import {World, expect, Callback} from '../support/assertsConfig';
import {IndexPage} from '../pages/index';

export = function() {
	this.World = World;
	
	var step = <cucumber.StepDefinitions>this;
	var hook = <cucumber.Hooks>this;
	var page:IndexPage; 
	
	hook.Before(function(){
		page = new IndexPage();
	});
	
	step.Given(/^tenho o aplicativo instalado$/, function(done: Callback) {
		done();
	});
	
	step.Given(/^abro o aplicativo pela primeira vez$/, (done:Callback) =>{
		page.visit().then(() => done(), (err) => done(err))
	});
	
	step.Given(/^devo visualizar a tela inicial\.$/, () =>
		expect(browser.getCurrentUrl()).to.eventually.equals(page.url)
	);
	
	step.When(/^clicar no menu lateral$/, () =>  page.accessMenu());
	
	step.Then(/^o side\-menu deve aparecer$/, () =>
		expect(page.menu().isDisplayed()).to.eventually.equal(true)
	);
}
