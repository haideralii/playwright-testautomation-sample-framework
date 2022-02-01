const { Locator, Page } = require("@playwright/test");

class PaintsPage {
  constructor(page) {
    this.page = page;

  }

  async navigateToPaintsPage(url) {
    await this.page.goto(url);
  }

}

module.exports = PaintsPage;
