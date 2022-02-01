const { Locator, Page } = require("@playwright/test");

class DropdownPage {
  constructor(page) {
    this.page = page;

    this.dropDownLink = page.locator('//a[normalize-space()="Dropdown"]');
    this.dropdown = page.locator("#dropdown");
  }

  //Actions

  async dropdownOptions(optionTxt) {
    return await this.page.locator(`#dropdown option >> text="${optionTxt}"`);
  }
  
  async clickDropdownink() {
    await this.dropDownLink.click();
  }

  async selectOptionsFromDropdown(labelTxt) {
    await this.dropdown.selectOption({ label: labelTxt });
  }
}

module.exports = DropdownPage;
