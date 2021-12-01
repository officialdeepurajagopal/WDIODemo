const BasePage = require('./base.page')
class LoginPage extends BasePage {
    get userNameTextBox() {
        return $('//input[@name="user-name"]')
    }
    get passwordTextBox() {
        return $('//input[@name="password"]')
    }
    get loginButton() {
        return $('//input[@type="submit"]')
    }

    enterCredentials(username, password) {



        this.userNameTextBox.setValue(username);
        this.passwordTextBox.setValue(password);
        this.loginButton.click();
        browser.pause(4000);

        let count = $$("//div[@class='inventory_list']/descendant::div[@class='inventory_item']/following::button");
        console.log('count is', count.length);
        count.forEach(element => {
            element.click();
        });
        expect($(`//span[contains(text(), '4')]`)).to.exist;   
    }

    validateLogin(){
        
    }
}
module.exports = new LoginPage();


