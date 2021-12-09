const BasePage = require('./base.page')
class HomePage extends BasePage {

    loggedInUserName(text){
        return $(`//div[contains(text(),'${text}')]`)
    }

    get btnLoggedInUserName(){
        return $('//button[@id="react-burger-menu-btn"]');
    }

    get btnSignOut(){
        return $("//a[@id='logout_sidebar_link']");
    }

   validateLogin(text){
    browser.pause(10000);
    expect(this.loggedInUserName).to.exist;
   }

   logoutUser(){
       this.btnLoggedInUserName.waitForExist({ timeout: 5000 });
        if(this.btnLoggedInUserName.isDisplayed()){
            this.btnLoggedInUserName.click();
            this.btnSignOut.click();
        }
        browser.pause(2000);
   }
}
module.exports = new HomePage();