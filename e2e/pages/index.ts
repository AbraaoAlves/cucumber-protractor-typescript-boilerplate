
export class IndexPage {
	name = "index";
	url = "/";
	
	visit(){
		return browser.get(this.url);
	}
	
	accessMenu() {
		var btnMenu = $('button.hamburger');
		
		return btnMenu.isDisplayed().then((displayed) => {
			if(displayed){
				return btnMenu.click()
			}else{
			 	return Promise.reject("Menu não está visivel");
			}	
		});
	}
	
	menu(){
		return element(by.css('nav.navbar'));
	}
}
