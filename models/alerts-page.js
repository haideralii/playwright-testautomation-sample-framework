const { Locator, Page } = require("@playwright/test");

class AlertsPage {
  constructor(page) {
    this.page = page;

    this.alertsPageLink = page.locator('a[href="/javascript_alerts"]');
    this.jsAlert = page.locator("button[onclick='jsAlert()']");
    this.jsConfirmAlert = page.locator("button[onclick='jsConfirm()']");
    this.jsPromptAlert = page.locator("button[onclick='jsPrompt()']");
    this.alertResultMsg = page.locator("#result");
  }

  // using element handles
  // checkBoxes = async () => await this.page.$$("#checkboxes input");

  //Actions
  async clickAlertsPagelink() {
    await this.alertsPageLink.click();
  }

  async clickJsAlertlink() {
    await this.jsAlert.click();
  }

  async clickConfirmJsAlertlink() {
    await this.jsConfirmAlert.click();
  }

  async clickJsPromptAlertlink() {
    await this.jsPromptAlert.click();
  }
}

module.exports = AlertsPage;
