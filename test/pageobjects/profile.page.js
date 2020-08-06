const Page = require('./page');

class ProfilePage extends Page {
    get referalLink() { return $('span[data-qa="referalLink"]')}
}
module.exports = new ProfilePage();