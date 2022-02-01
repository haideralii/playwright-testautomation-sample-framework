const test = require("../fixtures/base");

test.describe("Alerts Page Tests", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("Alerts tests @smoke", async ({ alertsPage, page, data }) => {
    await alertsPage.clickAlertsPagelink();

    page.once("dialog", async (dialog) => {
      console.log(dialog.message());
      await dialog.accept();
    });

    await alertsPage.clickJsAlertlink();
    await test
      .expect(alertsPage.alertResultMsg)
      .toContainText(`${data.alerts.jsAlertMsg}`);

    page.once("dialog", async (dialog) => {
      await dialog.dismiss();
    });

    await alertsPage.clickConfirmJsAlertlink();
    await test
      .expect(alertsPage.alertResultMsg)
      .toContainText(`${data.alerts.jsCancelAlertMsg}`);

    page.once("dialog", async (dialog) => {
      await dialog.accept(`${data.helloWorld}`);
    });

    await alertsPage.clickJsPromptAlertlink();
    await test
      .expect(alertsPage.alertResultMsg)
      .toContainText(`${data.alerts.jsPromptAlertMsg}${data.helloWorld}`);
  });
});
