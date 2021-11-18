const BasePage = require('./base.page')
class HomePage extends BasePage {

    loggedInUserName(text){
        return $(`//div[contains(text(),'${text}')]`)
    }

   validateLogin(text){
    expect(this.loggedInUserName(text)).toExist();
   }
}
module.exports = new HomePage();