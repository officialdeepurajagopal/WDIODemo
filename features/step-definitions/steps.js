const { Given, When, Then } = require('@cucumber/cucumber');
const loginPage = require('../pages/login.page');
const homePage = require('../pages/home.page');


Given('User goes to PodOp page', () => {
    loginPage.open('https://dashboard.podop.com');
})


When('the user enters username as {string} and password as {string}', function (username, password) {

    loginPage.enterCredentials(username, password);

});

Then('user logout from the application', function () {

    homePage.logoutUser();

});

Then('User verify login successful for {string}', (user) => {
    homePage.validateLogin(user);
});