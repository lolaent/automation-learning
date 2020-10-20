const assert = require('chai').assert;

const closeLoyaltyOverlayButtton =
  "[data-hook='overlay-merchandise_ice-pop_close']";
const acceptAllCookies = "[id='onetrust-accept-btn-handler']";
const getDealsEmailSignUp = "[data-hook='email-sign-up-expand']";
const emailSignUpTitle = "[data-hook='email-sign-up-title']";
const emailAddressInputField = "[data-hook='email-sign-up-email-input']";
const getDealButton = "[data-hook='email-sign-up-get-deals-button']";
const getDealsSuccessMessage = "[data-hook='email-sign-up-success-message']";
const travelersDropdown =
  "[data-hook='flight-search-travelers-expando-button']";
const searchFlightAdults = "[data-hook='flight-search-adults']";
const searchHomepageButton = "[data-hook='flight-search-submit']";

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

    let text = $(getDealsSuccessMessage).getText();

    assert.equal(text, expectedText, 'Successfull message is not correct');
  }

  clickTravelersDropdown() {
    $(travelersDropdown).waitForDisplayed();
    $(travelersDropdown).click();
  }

  byDefaultNumberForAdults(expectedValue) {
    let value = $(searchFlightAdults).getAttribute('value');

    assert.equal(value, expectedValue, 'Default number for adults is not 1');
  }

  validateSearchButtonIsDisplayed() {
    let searchButton = $(searchHomepageButton).isDisplayed();

    console.log(searchButton);

    assert.isTrue(searchButton, 'The search button is not displayed');
  }

  validateSearchButtonIsDisabled() {
    let button = $(searchHomepageButton).isClickable();
    console.log(button);

    assert.isFalse(button, 'The search button is clickable');
  }
}
export default new TestPageObject();
