import user from "../testData/users";
import { userLogin, userLogOut } from "../helpers/helpers";
import LoginPage from "../pageobjects/login.page";
import ProfilePage from "../pageobjects/profile.page";

describe("TC-L054 Profile/Settings learner can change password", () => {
  it("learner Login go to profile settings", () => {
    LoginPage.open();
    userLogin(user.learner.email, user.learner.password);
    ProfilePage.dropDownProfile.click();
    ProfilePage.settingsLink.click();
  });

  it("password Tab change password for new", () => {
    ProfilePage.tabPassword.click();
    expect(ProfilePage.btnUpdatePassword.isClickable()).eq(false);
    ProfilePage.inputOldPassword.setValue(user.learner.password);
    ProfilePage.inputNewPassword.setValue(user.learner.newPassword);
    ProfilePage.inputConfirmPassword.setValue(user.learner.newPassword);
    ProfilePage.btnUpdatePassword.click();
  });

  it("verify user still lodged in", () => {
    expect(ProfilePage.dropDownProfile.isDisplayed()).eq(true);
  });

  it("verify that user will redirect to Login Page after Log Out", () => {
    userLogOut();
    expect(LoginPage.inputEmail.isDisplayed()).eq(true);
  });

  it("verify user can login with new Password", () => {
    userLogin(user.learner.email, user.learner.newPassword);
    expect(ProfilePage.dropDownProfile.isDisplayed()).eq(true);
  });
});
