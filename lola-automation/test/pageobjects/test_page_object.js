const assert = require('chai').assert;

const closeLoyaltyOverlayButtton =
  "[data-hook='overlay-merchandise_ice-pop_close']";
const acceptAllCookies = "[id='onetrust-accept-btn-handler']";
const getDealsEmailSignUp = "[data-hook='email-sign-up-expand']";
const emailSignUpTitle = "[data-hook='email-sign-up-title']";
const emailAddressInputField = "[data-hook='email-sign-up-email-input']";
const getDealButton = "[data-hook='email-sign-up-get-deals-button']";
const getDealsSuccessMessage = "[data-hook='email-sign-up-success-message']";
class TestPageObject {
  openDEVURL() {
    browser.maximizeWindow();
    browser.url(process.env.appEnv);
  }

  closeLoyaltyOverlay() {
    $(closeLoyaltyOverlayButtton).waitForDisplayed();
    $(closeLoyaltyOverlayButtton).click();
  }

  clickAcceptAllCookiesButton() {
    $(acceptAllCookies).waitForDisplayed();
    $(acceptAllCookies).click();
  }

  clickGetDealsEmailSignUpButton() {
    $(getDealsEmailSignUp).waitForDisplayed();
    browser.pause(3000);
    $(getDealsEmailSignUp).click();
  }

  emailSignUpTitle(expectedText) {
    $(emailSignUpTitle).waitForDisplayed();
    $(emailSignUpTitle).getText();

    let text = $(emailSignUpTitle).getText();

    assert.equal(text, expectedText, 'Email sign up title text is not correct');
  }

  addGetDealsEmailAddress(text) {
    $(emailAddressInputField).addValue(text);
  }

  clickGetDealsButton() {
    $(getDealButton).waitForDisplayed();
    $(getDealButton).click();
  }

  getDealsSuccessMessage(expectedText) {
    $(getDealsSuccessMessage).waitForDisplayed();
    $(getDealsSuccessMessage).getText();

    let text = $(getDealsSuccessMessage).getText();

    assert.equal(text, expectedText, 'Successfull message is not correct');
  }
}
export default new TestPageObject();
