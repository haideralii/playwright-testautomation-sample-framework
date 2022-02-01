const test = require("../fixtures/base");

// example.spec.js
test.describe("Dropdown Page Tests", () => {

  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("drodown list Tests", async ({ dropdownPage, data }) => {

    // const availableOptions = page.$$('option')

    let labelText = `${data.dropdownOptions[Math.floor(Math.random() * `${data.dropdownOptions.length}`)]}`;
    console.log(labelText);

    await dropdownPage.clickDropdownink();
    await dropdownPage.selectOptionsFromDropdown(labelText);
    await test
      .expect(await dropdownPage.dropdownOptions(labelText))
      .toHaveAttribute("selected", "selected");
  });

});
