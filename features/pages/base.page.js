
const data = require('../data/data.js');
module.exports = class BasePage {
    open(path) {
        browser.url(data.JP[0].url);
    }
}