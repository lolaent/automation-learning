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
const incrementAdultsButton = "[data-hook='flight-search-adults_increment']";
const flightsPageTitle = "[data-hook='flights-page_page-heading']";
const flightsPageContinueButton = "[data-hook='flights-page_continue']";
const departingFlightsPrice =
  "[data-hook='flights-list-view_departing'] [data-hook='flight-price']";
const departingFlightNumber =
  " [data-hook='flights-list-view_departing'] [data-hook='flight-number']";
const departTime =
  "[data-hook='flights-list-view_departing'] [data-hook='flight-departure-time']";
const arriveTime =
  " [data-hook='flights-list-view_departing'] [data-hook='flight-arrival-time']";
const seatAvailable = "[data-hook='seats-available-text']";
const bundlePageTitle = "[data-hook='bundles-page']";
const bundlePageContinueButton = "[data-hook='bundles-page_continue']";
const travelersPageTitle = "[data-hook='travelers-page_page-heading']";
const travelersFirstName = "input[data-hook*='first-name']";
const bonusBundleStrikethroughPrice =
  "[data-hook='strikethrough-price_allegiant_bonus_bundle']";
const bonusBundlePrice = "[data-hook='bundle-price_allegiant_bonus_bundle']";

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

    assert.isTrue(searchButton, 'The search button is not displayed');
  }

  validateSearchButtonIsDisabled() {
    let button = $(searchHomepageButton).isClickable();

    assert.isFalse(button, 'The search button is clickable');
  }

  clickIncrementAdultsButton(number) {
    $(incrementAdultsButton).waitForDisplayed();

    for (let i = 1; i < number; i++) {
      $(incrementAdultsButton).click();
    }
    browser.pause(3000);
  }

  deleteEmailAddress() {
    while ($(emailAddressInputField).getAttribute('value') !== '') {
      browser.keys('Backspace');
    }
    browser.pause(1000);
  }

  openCustomURL(url) {
    browser.maximizeWindow();
    browser.url(url);
  }

  waitForDisplayed() {
    $(flightsPageTitle).waitForDisplayed();
    $(flightsPageContinueButton).waitForDisplayed();
  }

  departingFlightPrice() {
    let departingFlightsPricesList = $$(departingFlightsPrice);
    console.log('Lungime array prices: ', departingFlightsPricesList.length);

    for (let i = 0; i < departingFlightsPricesList.length; i++) {
      console.log(departingFlightsPricesList[i].getText().slice(1));
    }

    for (let element of departingFlightsPricesList) {
      console.log('For of prices: ', element.getText());
    }
  }

  departingFlightNumber() {
    let departingFlightNumbersList = $$(departingFlightNumber);
    console.log(
      'Lungime array flight number: ',
      departingFlightNumbersList.length
    );

    for (let i = 0; i < departingFlightNumbersList.length; i++) {
      console.log(departingFlightNumbersList[i].getText());
    }

    for (let element of departingFlightNumbersList) {
      console.log('For of numbers: ', element.getText());
    }
  }

  departTime() {
    let departFlightTime = $$(departTime);
    console.log('Array depart time: ', departFlightTime.length);

    for (let i = 0; i < departFlightTime.length; i++) {
      console.log(departFlightTime[i].getText());
    }

    for (let element of departFlightTime) {
      console.log('For of depart time: ', element.getText());
    }
  }

  arriveTime() {
    let arriveFlightTime = $$(arriveTime);
    console.log('Array arrive time: ', arriveFlightTime.length);

    for (let i = 0; i < arriveFlightTime.length; i++) {
      console.log(arriveFlightTime[i].getText());
    }

    for (let element of arriveFlightTime) {
      console.log('For of depart time: ', element.getText());
    }
  }

  seatsAvailableText() {
    let seatsText = $$(seatAvailable);
    console.log('Array seats available text: ', seatsText.length);

    for (let i = 0; i < seatsText.length; i++) {
      console.log(seatsText[i].getText());
    }

    for (let element of seatsText) {
      console.log('For of seats text: ', element.getText());
    }
  }

  clickAcceptAllCookiesButtonFlightsPage() {
    $(acceptAllCookies).waitForDisplayed();
    $(acceptAllCookies).click();
  }

  clickContinueButtonFlightsPage() {
    $(flightsPageContinueButton).waitForDisplayed();
    $(flightsPageContinueButton).click();
  }

  waitForBundlePageToBeDisplayed() {
    $(bundlePageTitle).waitForDisplayed();
    $(bundlePageContinueButton).waitForDisplayed();
  }

  calculateBonusBundleDiscount() {
    let bonusBundleUndiscountedPrice = $(bonusBundleStrikethroughPrice)
      .getText()
      .slice(2, -1);
    let bonusBundleDiscountedPrice = $(bonusBundlePrice)
      .getText()
      .slice(2, -1);

    console.log('Undiscounted price: ', bonusBundleUndiscountedPrice);
    console.log('Discounted price', bonusBundleDiscountedPrice);

    let discountValue =
      bonusBundleUndiscountedPrice - bonusBundleDiscountedPrice;

    console.log(discountValue);
  }

  clickContinueButtonBundlesPage() {
    $(bundlePageContinueButton).waitForDisplayed();
    $(bundlePageContinueButton).click();
  }

  waitForTravelersPageToBeDisplayed() {
    $(travelersPageTitle).waitForDisplayed();
    $(travelersPageTitle).waitForDisplayed();
  }

  addTravelersFirstName() {
    let firstName = $$(travelersFirstName);

    // for (let i = 0; i < firstName.length; i++) {
    //   firstName[i].addValue('John Doe');
    // }

    for (let input of firstName) {
      input.addValue('John Doe');
    }
    browser.pause(3000);
  }
}
export default new TestPageObject();
