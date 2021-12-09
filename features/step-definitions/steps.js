const { Given, When, Then } = require('@cucumber/cucumber');
const data = require('../data/data.js');
const loginPage = require('../pages/login.page');
const homePage = require('../pages/home.page');


Given('User goes to Login page', () => {
    loginPage.open(data.url);
})


When(/^the user enters username as "([^"]*)" and password as "([^"]*)"$/, (username, password) => {

    loginPage.enterCredentials(username, password);
  });

Then('user logout from the application', function () {

    homePage.logoutUser();

});

Then(/^User verify login successful for "([^"]*)"$/, (user) => {
    homePage.validateLogin(user);
});