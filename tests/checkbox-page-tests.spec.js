const test = require("../fixtures/base");

test.describe("CheckBox Page Tests", () => {

  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("check and radio button tests", async ({ checkboxPage }) => {
    await checkboxPage.clickCheckBoxlink();
    // giving nth-index number for checkbox selector
    let firstCheckBox = await checkboxPage.selectCheckBox(1);
    firstCheckBox.check();
    let secondCheckBox = await checkboxPage.selectCheckBox(3);
    secondCheckBox.uncheck();
    await test.expect(firstCheckBox).toBeChecked();
    await test.expect(secondCheckBox).not.toBeChecked();
  });
});
