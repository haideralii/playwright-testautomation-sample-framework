const test = require("../fixtures/base");

test.describe("Home Page Tests", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("get Elements state tests", async ({
    practiceFormPage,
    page,
    data,
  }) => {
    await practiceFormPage.navigateToPracticeFormPage(
      `${data.formPageUrl}`
    );

    // print the element state
    console.log(await practiceFormPage.firstName.isDisabled());
    console.log(await practiceFormPage.firstName.isEnabled());
    await test.expect(practiceFormPage.firstName).toBeEnabled();

    console.log(await practiceFormPage.firstName.isEditable());
    await test.expect(practiceFormPage.firstName).toBeEditable();

    console.log(await practiceFormPage.sportsCheck.isChecked());
    await test.expect(practiceFormPage.sportsCheck).not.toBeChecked();

    console.log(await practiceFormPage.sportsCheck.isVisible());
    await test.expect(practiceFormPage.sportsCheck).toBeVisible();

    console.log(await practiceFormPage.submitBtn.isHidden());
    await test.expect(practiceFormPage.submitBtn).not.toBeHidden();

    console.log(await practiceFormPage.submitBtn.isVisible());
    await test.expect(practiceFormPage.submitBtn).toBeVisible();
  });
});
