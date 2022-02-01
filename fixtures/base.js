const Base = require("@playwright/test");
const ForgotPasswordPage = require("../models/forgot-password-page");
const DropdownPage = require("../models/dropdown-page");
const CheckboxPage = require("../models/checks-box-page");
const IframesPage = require("../models/iframes-page");
const AlertsPage = require("../models/alerts-page");
const PracticeFormPage = require("../models/practice-form-page");
const PaintsPage = require("../models/paints-page");
const Data = require("../data/data.json");

module.exports = Base.test.extend({
  data: async ({ page }, use) => {
    await use(Data);
  },

  forgotPasswordPage: async ({ page }, use) => {
    await use(new ForgotPasswordPage(page));
  },

  dropdownPage: async ({ page }, use) => {
    await use(new DropdownPage(page));
  },

  checkboxPage: async ({ page }, use) => {
    await use(new CheckboxPage(page));
  },

  iframesPage: async ({ page }, use) => {
    await use(new IframesPage(page));
  },

  alertsPage: async ({ page }, use) => {
    await use(new AlertsPage(page));
  },

  practiceFormPage: async ({ page }, use) => {
    await use(new PracticeFormPage(page));
  },

  paintsPage: async ({ page }, use) => {
    await use(new PaintsPage(page));
  },
});
