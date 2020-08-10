module.exports = class Page {
  open(path) {
    browser.maximizeWindow();
    browser.deleteAllCookies();
    return browser.url(path);
  }
};
