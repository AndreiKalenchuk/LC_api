module.exports = class Page {
  open(path) {
    return browser.url(path);
    browser.maximizeWindow();
    browser.deleteAllCookies();
  }
};
