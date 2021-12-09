const utils = require('../utils/returnTag.js');
const data = require('../data/data.js');
module.exports = class BasePage {
    open(path) {
        browser.url(data.url);
    }
}