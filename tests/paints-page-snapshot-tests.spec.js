const test = require("../fixtures/base");

test.describe("Paints Page Tests", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("Match SnapShot & move mouse Tests", async ({
    paintsPage,
    page,
    data,
  }) => {
    test.fail();
    await paintsPage.navigateToPaintsPage(`${data.paintsPageUrl}`);
    // drawing a square
    await page.mouse.move(200, 200);
    await page.mouse.down();
    await page.mouse.move(400, 200);
    await page.mouse.move(400, 400);
    await page.mouse.move(200, 400);
    await page.mouse.move(200, 200);
    await page.mouse.up();

    await test
      .expect(await page.screenshot())
      .toMatchSnapshot(["snaphots", "paints-page.png"], {
        threshold: 0,
      });
  });

  test("Take screenshots", async ({ page }) => {
    // take screenshot code
    await page.screenshot({ path: "test-results/screenshot.png" });

    // take screenshot of full page (long page)
    await page.screenshot({
      path: "test-results/fullpage.png",
      fullPage: true,
    });
  });
});
