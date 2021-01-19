let assert = require('chai').assert;

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
const allegiantBonusBundle =
  "[data-hook='bundle-header-image_allegiant_bonus_bundle']";
const selectBonusBundle = "[data-hook='select-tier-2']";
const selectTotalBundle = "[data-hook='select-tier-3']";
const totalBundleStrikethroughPrice =
  "[data-hook='strikethrough-price_allegiant_total_bundle']";
const totalBundlePrice = "[data-hook='bundle-price_allegiant_total_bundle']";
const adultFirstName = "[data-hook='travelers-form_adults_0_first-name']";
const adultLastName = "[data-hook='travelers-form_adults_0_last-name']";
const adultGender = "[data-hook='travelers-form_adults_0_gender_MALE']";
const adultMonthDob = "[data-hook='travelers-form_adults_0_dob-month']";
const adultDayDob = "[data-hook='travelers-form_adults_0_dob-day']";
const adultYearDob = "[data-hook='travelers-form_adults_0_dob-year']";
const travelersPageContinueButton = "[data-hook='travelers-page_continue']";
const seatsPageTitle = "[data-hook='seats-page_page-heading']";
const seatsPageContinueButton = "[data-hook='seats-page_continue']";
const seatsDepartingTab = "[data-hook='seats-page-tabs_departing']";
const seatsReturningTab = "[data-hook='seats-page-tabs_returning']";
const seatsPageNoThanksLink = "[data-hook='seats-page_skip']";
const bagsPageTitle = "[data-hook='ancillaries-page_page-heading']";
const petInCabinAddToCart = "[data-hook='pet-in-cabin-card_add-to-cart']";
const decrementButonCarryOn =
  "[data-hook='ancillaries-page-traveler_0_carry-on_decrement']";
const decrementButtonCheckedBags =
  "[data-hook='ancillaries-page-traveler_0_checked-in_decrement']";
const incrementCarryOnBagsButton =
  "[data-hook='ancillaries-page-traveler_0_carry-on_increment']";
const incrementCheckedBagsButton =
  "[data-hook='ancillaries-page-traveler_0_checked-in_increment']";
const addToCartTripFlex = "[data-hook='trip-flex-card_add-to-cart']";
const tripFlexAddedToCart = "[data-hook='trip-flex-card_cart-added']";
const addPetInCabinButton = "[data-hook='pet-in-cabin-card_add-to-cart']";
const addPetInCabinSegment =
  "[data-hook='extras-popup-flight-leg_departing'] [data-hook='extras-popup-flight-leg_checkbox_label']";
const addPetInCabinModalButton = "[data-hook='pet-in-cabin-modal_add-to-cart']";
const petInCabinPrice = "[data-hook='pet-in-cabin-card_price-selected']";
const bagsPageContinueButton = "[data-hook='ancillaries-page_continue-popup']";
const bagsPageContinuePopup =
  "[data-hook='ancillaries-continue-popup_button_continue']";
const hotelsPageTitle = "[data-hook='hotels-page_page-heading']";
const hotelsPageContinueButton = "[data-hook='hotels-page_continue']";
const carsPageTitle = "[data-hook='cars-page_page-heading']";
const carsPageContinueButton = "[data-hook='cars-page_continue']";
const cartIcon = "[data-hook='header-cart-button_icon']";
const petInCabinCartPrice =
  "[data-hook='cart-travelers_0_extras_pet-in-cabin-price_undefined']";
const cartXbutton = "[data-hook='cart-close']";
const removePetInCabine = "[data-hook='pet-in-cabin-card_remove']";
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

  // calculateBonusBundleDiscount() {
  //   let bonusBundleUndiscountedPrice = $(bonusBundleStrikethroughPrice)
  //     .getText()
  //     .slice(2, -1);
  //   let bonusBundleDiscountedPrice = $(bonusBundlePrice)
  //     .getText()
  //     .slice(2, -1);

  //   console.log('Undiscounted price: ', bonusBundleUndiscountedPrice);
  //   console.log('Discounted price', bonusBundleDiscountedPrice);

  //   let discountValue =
  //     bonusBundleUndiscountedPrice - bonusBundleDiscountedPrice;

  //   console.log(discountValue);
  // }

  getBundleDiscount(bundleType) {
    let bonusBundleUndiscountedPrice = $(bonusBundleStrikethroughPrice)
      .getText()
      .slice(2, -1);
    let bonusBundleDiscountedPrice = $(bonusBundlePrice)
      .getText()
      .slice(2, -1);

    let totalBundleUndiscountedPrice = $(totalBundleStrikethroughPrice)
      .getText()
      .slice(2, -1);
    let totalBundleDiscountedPrice = $(totalBundlePrice)
      .getText()
      .slice(2, -1);

    if (bundleType === 'Allegiant Bonus') {
      return bonusBundleUndiscountedPrice - bonusBundleDiscountedPrice;
    } else if (bundleType === 'Allegiant Total') {
      return totalBundleUndiscountedPrice - totalBundleDiscountedPrice;
    }
  }

  calculateBundleDiscount(bundleType) {
    let bundleDiscount = this.getBundleDiscount(bundleType);
    console.log('****** ', bundleDiscount);
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
  }

  getCurrentUrl() {
    let url = browser
      .getUrl()
      .split('-')[1]
      .split('.')[0];

    console.log(url);
  }

  clickAcceptAllCookiesButtonBundlesPage() {
    $(acceptAllCookies).waitForDisplayed();
    $(acceptAllCookies).click();
  }

  selectBundle(bundleType) {
    if (bundleType === 'Allegiant Bonus') {
      $(selectBonusBundle).click();
    } else if (bundleType === 'Allegiant Total') {
      $(selectTotalBundle).click();
    } else {
      assert.fail(
        'Please use Allegiant Bonus or Allegiant Total as parameters'
      );
    }
  }

  addTravelerFirstName(firstName) {
    $(adultFirstName).addValue(firstName);
  }

  addTravelerLastName(lastName) {
    $(adultLastName).addValue(lastName);
  }

  selectTravelerGender() {
    $(adultGender).click();
  }

  addMonthDob(month) {
    $(adultMonthDob).click();
    browser.keys([month, 'Enter']);
  }

  addDayDob(day) {
    $(adultDayDob).click();
    browser.keys([day, 'Enter']);
  }

  addYearDob(year) {
    $(adultYearDob).addValue(year);
  }

  clickAcceptAllCookiesButtonTravelersPage() {
    $(acceptAllCookies).waitForDisplayed();
    $(acceptAllCookies).click();
  }

  clickContinueButtonTravelersPage() {
    $(travelersPageContinueButton).waitForDisplayed();
    // $(travelersPageContinueButton).scrollIntoView();

    let scrollIntoViewOptions = { behavior: 'smooth' };
    $(travelersPageContinueButton).scrollIntoView(scrollIntoViewOptions);

    $(travelersPageContinueButton).click();
  }

  waitForSeatsPageToBeDisplayed() {
    $(seatsPageTitle).waitForDisplayed();
    $(seatsPageContinueButton).waitForDisplayed();
  }

  departingTabHighlighted() {
    let isTabHighlighted = $(seatsDepartingTab).getAttribute('aria-selected');

    let isTabHighlightedBoolean = isTabHighlighted === 'true';
    assert.isTrue(isTabHighlightedBoolean, 'Departing tab is not highlighted');
  }

  clickContinueDepartingTab() {
    $(seatsPageContinueButton).waitForDisplayed();
    $(seatsPageContinueButton).click();
    browser.pause(3000);
  }
  returningTabHighlighted() {
    let isTabHighlighted = $(seatsReturningTab).getAttribute('aria-selected');

    let isTabHighlightedBoolean = isTabHighlighted === 'true';

    assert.isTrue(isTabHighlightedBoolean, 'Returning tab is not highlighted');
  }

  clickNoThanksLink() {
    let scrollIntoViewOptions = { behavior: 'smooth' };
    $(seatsPageNoThanksLink).scrollIntoView(scrollIntoViewOptions);

    $(seatsPageNoThanksLink).waitForDisplayed();
    $(seatsPageNoThanksLink).click();
  }

  waitForBagsPageToBeDisplayed() {
    $(bagsPageTitle).waitForDisplayed();
    $(petInCabinAddToCart).waitForDisplayed();
  }

  carryOnDecrementButtonsIsDisabled() {
    let isCarryOnDecrementButtonDisabled = $(
      decrementButonCarryOn
    ).getAttribute('disabled');

    let isCarrryOnDecrementButtonDisabledBoolean =
      isCarryOnDecrementButtonDisabled === 'true';
    assert.isTrue(
      isCarrryOnDecrementButtonDisabledBoolean,
      'Carry On decrement button is not disabled'
    );
  }

  checkedBagsDecrementButtonsIsDisabled() {
    let isCheckedBagsDecrementButtonDisabled = $(
      decrementButtonCheckedBags
    ).getAttribute('disabled');

    let isCheckedBagsDecrementButtonDisabledBoolean =
      isCheckedBagsDecrementButtonDisabled === 'true';
    assert.isTrue(
      isCheckedBagsDecrementButtonDisabledBoolean,
      'Checked Bags decrement button is not disabled'
    );
  }

  clickIncrementCarryOnBagsButton(carryOnBags) {
    $(incrementCarryOnBagsButton).waitForDisplayed();

    for (let i = 0; i < carryOnBags; i++) {
      $(incrementCarryOnBagsButton).click();
    }
  }

  carryOnIncrementButtonsIsDisabled() {
    let isCarryOnIncrementButtonDisabled = $(
      incrementCarryOnBagsButton
    ).getAttribute('disabled');

    let isCarryOnIncrementButtonDisabledBoolean =
      isCarryOnIncrementButtonDisabled === 'true';
    assert.isTrue(
      isCarryOnIncrementButtonDisabledBoolean,
      'Carry On increment button is not disabled'
    );
  }

  clickIncrementCheckedBagsButton(checkedBags) {
    $(incrementCheckedBagsButton).waitForDisplayed();

    for (let i = 0; i < checkedBags; i++) {
      $(incrementCheckedBagsButton).click();
    }
  }

  checkedBagsIncrementButtonsIsDisabled() {
    let isCheckedBagsIncrementButtonDisabled = $(
      incrementCheckedBagsButton
    ).getAttribute('disabled');

    let isCheckedBagsIncrementButtonDisabledBoolean =
      isCheckedBagsIncrementButtonDisabled === 'true';
    assert.isTrue(
      isCheckedBagsIncrementButtonDisabledBoolean,
      'Checked Bags increment button is not disabled'
    );
  }

  addTripFlex() {
    $(addToCartTripFlex).click();
  }

  validateAddedTripflexMessage(expectedText) {
    $(tripFlexAddedToCart).waitForDisplayed();

    let addedToCartText = $(tripFlexAddedToCart).getText();

    assert.equal(
      addedToCartText,
      expectedText,
      'ADDED TO CART text is displayed'
    );
    browser.pause(3000);
  }

  addPetInCabin() {
    let scrollIntoViewOptions = { behavior: 'smooth' };
    $(addPetInCabinButton).scrollIntoView(scrollIntoViewOptions);

    $(addPetInCabinButton).click();
    $(addPetInCabinSegment).click();
    $(addPetInCabinModalButton).click();
  }

  petInCabinPrice() {
    let petInCabinTotalPrice = $(petInCabinPrice).getText();
    console.log(petInCabinTotalPrice);
  }

  openCart() {
    $(cartIcon).click();
  }

  petInCabinCartPrice() {
    $(petInCabinCartPrice).isDisplayed();
  }

  clickContinueButtonBagsPage() {
    $(bagsPageContinueButton).waitForDisplayed();

    let scrollIntoViewOptions = { behavior: 'smooth' };
    $(bagsPageContinueButton).scrollIntoView(scrollIntoViewOptions);

    $(bagsPageContinueButton).click();
  }

  clickContinuePopupBagsPage() {
    $(bagsPageContinuePopup).waitForDisplayed();
    $(bagsPageContinuePopup).click();
  }

  waitForHotelsPageToBeDisplayed() {
    $(hotelsPageTitle).waitForDisplayed();
    $(hotelsPageContinueButton).waitForDisplayed();
  }

  clickContinueButtonHotelsPage() {
    $(hotelsPageContinueButton).waitForDisplayed();
    $(hotelsPageContinueButton).click();
  }

  waitForCarsPageToBeDisplayed() {
    $(carsPageTitle).waitForDisplayed();
    $(carsPageContinueButton).waitForDisplayed();
  }

  closeCart() {
    $(cartXbutton).click();
  }

  removePetc() {
    $(removePetInCabine).click();
  }
}
export default new TestPageObject();
