const { Locator, Page } = require("@playwright/test");

class PracticeFormPage {
  constructor(page) {
    this.page = page;

    this.firstName = page.locator("#firstName");
    this.sportsCheck = page.locator("#hobbies-checkbox-1");
    this.submitBtn = page.locator("#submit");

  }

  async navigateToPracticeFormPage(url) {
    await this.page.goto(url);
  }

}

module.exports = PracticeFormPage;
