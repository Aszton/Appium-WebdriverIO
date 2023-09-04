class Action {
  async click(selector) {
    await $(selector).click();
  }
  async isDisplayed(selector) {
    await expect($(selector)).toBeDisplayed();
  }
  async checkText(selector, text) {
    await expect($(selector)).toHaveText(text);
  }
  async type(selector, value) {
    await $(selector).addValue(value);
  }
  async getText(selector) {
    await $(selector).getText();
  }
}

export default new Action();
