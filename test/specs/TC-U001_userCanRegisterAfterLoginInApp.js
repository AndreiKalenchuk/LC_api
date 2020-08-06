import { apiUserRegister } from "../helpers/apiHelpers";
import user from "../testData/users";
import LoginPage from "../pageobjects/login.page";
import ProfilePage from "../pageobjects/profile.page";
import {clearValue} from "../helpers/helpers";

let newUserEmail = null;
let newUserPassword = null;

describe("TC-U001 New user can Login after registration", () => {
  it("register new user api", async () => {
    await apiUserRegister(user.newUser);
  });

  it("new user open login page", () => {
    LoginPage.open();
    expect(browser.getTitle()).eq("Local Coding", "Wrong page Title");
  });

  it("new user logIn first step", () => {
    expect(LoginPage.btnLogIn.isEnabled()).eq(false);
    LoginPage.inputEmail.setValue(user.newUser.email);
    LoginPage.inputPassword.setValue(user.newUser.password);
    LoginPage.btnLogIn.click();
    browser.waitUntil(() => LoginPage.dropDownCountry.isExisting(),
        "No redirect to second step"
    );
  });

  it("new user login step 2", () => {
    LoginPage.dropDownCountry.click();
    LoginPage.dropDownUS.click();
    clearValue(LoginPage.inputPhone).setValue(user.newUser.phone);
    LoginPage.btnSubmit.click();
    browser.waitUntil(
      () => ProfilePage.referalLink.isExisting(),
      "No redirect to profile page"
    );
  });
});
