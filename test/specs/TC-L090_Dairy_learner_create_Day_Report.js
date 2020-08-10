import user from "../testData/users";
import DiaryPage from "../pageobjects/Diary.page";
import { apiUserLogin } from "../helpers/apiHelpers";
import { userLogin } from "../helpers/helpers";
import LoginPage from "../pageobjects/login.page";
import { dayReportData } from "../testData/createDayReport.data";

describe("TC -L090 Learner Create Day Report", () => {
  it("TC -L090 learner login", () => {
    LoginPage.open();
    userLogin(user.learner.email, user.learner.password);
  });

  it('TC -L090 open Diary page click "create day report"', () => {
    DiaryPage.open();
    DiaryPage.btnCreateDayReport.click();
  });

  it("TC -L090 create day report", () => {
    DiaryPage.clickOnCheckbox();
    DiaryPage.clickOnCheckbox();
    DiaryPage.clickOnCheckbox();
    DiaryPage.selectMoralDropdown();
    DiaryPage.selectHoursDropdown();
    DiaryPage.textareaHowWasDay.setValue(dayReportData.HowWasYourDay);
    DiaryPage.btnCreate.click();
  });

  it("verify day report was created", () => {
    browser.waitUntil(
      () =>
        DiaryPage.dayReportDescription.getText() === dayReportData.HowWasYourDay
    );
  });
});
