const { Locator } = require("@playwright/test");

class IframesPage {
  constructor(page) {
    this.page = page;

    this.framesPageLink = page.locator('//a[normalize-space()="Frames"]');
    this.iframesPageLink = page.locator('a[href="/iframe"]');
    this.iframeEditor = page.frameLocator("#mce_0_ifr").locator("#tinymce");
    this.checkboxes = "#checkboxes input";
  }

  //Actions
  async clickFramesPageLink() {
    await this.framesPageLink.click();
  }

  async clickIframesPageLink() {
    await this.iframesPageLink.click();
  }

  async typeInIframe(text) {
    await this.iframeEditor.fill(text);
  }
}

module.exports = IframesPage;
