import user from "../testData/users";

const Page = require("./page");

class ProfilePage extends Page {
  open(path) {
    return super.open(`/profile/${user.learner.id}`);
  }

  get referalLink() {
    return $('span[data-qa="referalLink"]');
  }

  get header() {
    return $("h1");
  }

  /**
     Profile Dropdown
     */
  get dropDownProfile() {
    return $(".ant-dropdown-link");
  }

  get profileLink() {
    return $('[data-qa="profile"]');
  }

  get settingsLink() {
    return $('[data-qa="settings"]');
  }

  get ordersLink() {
    return $('[data-qa="orders"]');
  }

  get logoutLink() {
    return $('[data-qa="logout"]');
  }

  /**
     Profile --> Settings Tabs
     */

  get tabProfile() {
    return $('[data-qa="profile"]');
  }

  get tabPassword() {
    return $('[data-qa="password"]');
  }

  get tabEmail() {
    return $('[data-qa="email"]');
  }

  get tabLinks() {
    return $('[data-qa="links"]');
  }

  get tabShippingAddress() {
    return $('[data-qa="shippingAddress"]');
  }

  get inputOldPassword() {
    return $("#oldPassword");
  }

  get inputNewPassword() {
    return $("#newPassword");
  }

  get inputConfirmPassword() {
    return $("#confirmPassword");
  }

  get btnUpdatePassword() {
    return $('button[type="submit"]');
  }
}

module.exports = new ProfilePage();
