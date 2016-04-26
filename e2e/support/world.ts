/// <reference path="../typings/tsd.d.ts" />

export function World() {
	this.currentUrl = () => browser.getCurrentUrl();	
}

export interface IWorld{
	currentUrl() : webdriver.promise.Promise<string>;
}