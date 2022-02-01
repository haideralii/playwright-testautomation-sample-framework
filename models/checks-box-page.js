const { Locator, Page } = require("@playwright/test");

class CheckboxPage {
  constructor(page) {
    this.page = page;

    this.checkBoxPageLink = page.locator('//a[normalize-space()="Checkboxes"]');
    // this.secondCheckBox = page.locator("input:nth-child(2)");
    // this.checkbox = page.locator('#checkboxes input >> text="checkbox 1"');
  }

  // using element handles
  // checkBoxes = async () => await this.page.$$("#checkboxes input");

  //Actions

  async selectCheckBox(nthChild) {
    return await this.page.locator(`#checkboxes input:nth-child(${nthChild})`);
  }

  async clickCheckBoxlink(node) {
    await this.checkBoxPageLink.click();
  }

  async checkTheCheckBox(checkBoxNumber) {
    const listOfCheckBoxes = await this.page.$$(this.checkboxes);
    await listOfCheckBoxes[checkBoxNumber].check();
  }

  async selectOptionsFromDropdown() {
    await this.dropdown.selectOption("1");
  }
}

module.exports = CheckboxPage;
