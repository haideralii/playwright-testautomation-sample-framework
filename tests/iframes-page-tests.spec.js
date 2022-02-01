const test = require("../fixtures/base");

test.describe("iFrames Page Tests", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("iframes tests @smoke", async ({ iframesPage, data, page }) => {
    let text = `${data.helloWorld}`;
    await iframesPage.clickFramesPageLink();
    await iframesPage.clickIframesPageLink();
    await page.waitForLoadState("networkidle");
    await test.expect(iframesPage.iframeEditor).toBeEditable();
    await test.expect(iframesPage.iframeEditor).toBeFocused();
    await iframesPage.typeInIframe(text);
    console.log(text);
    await test.expect(iframesPage.iframeEditor).toHaveText(text);
  });
});
