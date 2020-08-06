
module.exports = class Page {

    open (path) {
        return browser.url(path);
        browser.maximizeWindow();
    }

    get header() { return $('h1') }
}
