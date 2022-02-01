const { Locator, Page } = require('@playwright/test')

class ForgotPasswordPage {
  constructor (page) {
    this.page = page

    this.emailFieldLabel = "label[for='email']"
    this.forgotPasswordLink = page.locator(
      '//a[normalize-space()="Forgot Password"]'
    )
    this.emailField = page.locator('#email')
  }

  //Actions

  async clickForgotPasswordLink () {
    await this.forgotPasswordLink.click()
  }

  async enterTxtInEmailField (email) {
    await this.emailField.type(email, { delay: 50 })
  }
}

module.exports = ForgotPasswordPage
