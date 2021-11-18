const BasePage = require('./base.page')
class LoginPage extends BasePage {
    get userNameTextBox() {
        return $('//input[@name="user"]')
    }
    get passwordTextBox() {
        return $('//input[@name="password"]')
    }
    get loginButton() {
        return $('//button[@type="submit"]')
    }

    enterCredentials(username, password) {
        this.userNameTextBox.setValue(username);
        this.passwordTextBox.setValue(password);
        this.loginButton.click();
        browser.pause(4000);
    }

    validateLogin(){
        
    }
}
module.exports = new LoginPage();


