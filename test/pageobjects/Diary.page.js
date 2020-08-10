import Page from "../pageobjects/page";
import faker from "faker";

function randomFromRange(min, max) {
  return faker.random.number({
    min: min,
    max: max,
  });
}

class DiaryPage extends Page {
  open() {
    return super.open("/diary");
  }

  get btnCreateDayReport() {
    return $(".ant-btn-primary");
  }

  get listInputsCheckbox() {
    return $$('input[type="checkbox"]');
  }

  clickOnCheckbox() {
    const length = this.listInputsCheckbox.length - 1;
    this.listInputsCheckbox[randomFromRange(0, length)].click();
  }

  get listDropDownMoralOptions() {
    return $$(".ant-select-item-option-content");
  }

  selectMoralDropdown() {
    $("#morale").click();
    const length = this.listDropDownMoralOptions.length - 1;
    const el = this.listDropDownMoralOptions[randomFromRange(0, length)];
    el.scrollIntoView();
    el.click();
  }

  get dropDownHours() {
    return $("#hours_list");
  }

  selectHoursDropdown() {
    $("#hours").click();
    const length = this.listDropDownMoralOptions.length - 1;
    const el = this.listDropDownMoralOptions[
      randomFromRange(length / 2, length)
    ];
    el.scrollIntoView();
    el.click();
  }

  get textareaHowWasDay() {
    return $("#description");
  }

  get btnCreate() {
    return $('button[type="submit"]');
  }

  get dayReportDescription() {
    return $$(".pb-4.mb-4.border-bottom .ant-row")[2];
  }
}

export default new DiaryPage();
