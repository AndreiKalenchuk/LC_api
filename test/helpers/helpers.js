import LoginPage from "../pageobjects/login.page";
import ProfilePage from "../pageobjects/profile.page";
import Page from "../pageobjects/page";
import user from "../testData/users";
export function clearValue(selector) {
  selector.waitForClickable();
  while (selector.getValue().length != 0) {
    selector.click();
    selector.keys(["Control", "a"]);
    selector.keys("Delete");
  }
  return selector;
}

export function userLogin(userEmail, userPassword) {
  LoginPage.inputEmail.waitForDisplayed();
  LoginPage.inputEmail.setValue(userEmail);
  LoginPage.inputPassword.setValue(userPassword);
  LoginPage.btnSubmit.click();
  browser.waitUntil(() =>
    ProfilePage.header.getText().includes(user.learner.firstName)
  );
  return this;
}

export function userLogOut() {
  ProfilePage.open();
  ProfilePage.dropDownProfile.waitForClickable();
  ProfilePage.dropDownProfile.click();
  ProfilePage.logoutLink.waitForClickable();
  ProfilePage.logoutLink.click();
  browser.waitUntil(
    () => LoginPage.inputEmail.isDisplayed(),
    "No redirect to Login Page"
  );
  return this;
}
