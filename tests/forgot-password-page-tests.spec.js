const test = require("../fixtures/base");

// example.spec.js
test.describe("Home Page Tests", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test(`Click forgot password link ||
          forgot password email field test`, async ({
    forgotPasswordPage,
    page,
    data,
  }) => {
    await forgotPasswordPage.clickForgotPasswordLink();
    await test.expect(page).toHaveURL(/forgot_password/);
    await test.expect(forgotPasswordPage.emailFieldLabel).toBeTruthy();
    await test.expect(forgotPasswordPage.emailField).toBeEmpty();
    await forgotPasswordPage.enterTxtInEmailField(`${data.email}`);
    await test.expect(forgotPasswordPage.emailField).toBeEditable();
    await test
      .expect(await page.screenshot())
      .toMatchSnapshot(["snaphots", "forgot-password-page.png"], {
        threshold: 1,
      });
  });
});
