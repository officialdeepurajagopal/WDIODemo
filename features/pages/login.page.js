const BasePage = require('./base.page')
class LoginPage extends BasePage {
    get userNameTextBox() {
        return $('//input[@placeholder="Username"]')
    }
    get passwordTextBox() {
        return $("//input[@id='password']")
    }
    get loginButton() {
        return $('//input[@type="submit"]')
    }

    enterCredentials(username, password) {
        this.userNameTextBox.setValue(username);
        this.passwordTextBox.setValue(password);
        this.loginButton.click();
        browser.pause(4000);
    }
}
module.exports = new LoginPage();


