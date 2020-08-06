
module.exports = class Page {

    open (path) {
        return browser.url(path)
    }

    get header() { return $('h1') }
}
