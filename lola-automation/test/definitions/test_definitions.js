import { Given, When, Then } from 'cucumber';
import TestPageObject from '../pageobjects/test_page_object.js';

Given(/^I access the DEV URL$/, function() {
  TestPageObject.openDEVURL();
});

When(/^I click on the Close button from the Loyalty overlay$/, function() {
  TestPageObject.closeLoyaltyOverlay();
});

When(/^I click on Accept All Cookies button$/, function() {
  TestPageObject.clickAcceptAllCookiesButton();
});

When(/^I click on Get Deals Email Sign-Up button$/, function() {
  TestPageObject.clickGetDealsEmailSignUpButton();
});

Then(/^I validate that the "([^"]*)" text is displayed$/, function(
  expectedText
) {
  TestPageObject.emailSignUpTitle(expectedText);
});

When(/^I type "([^"]*)" in the Enter your email address input field$/, function(
  text
) {
  TestPageObject.addGetDealsEmailAddress(text);
});

When(/^I click on Get Deals button$/, function() {
  TestPageObject.clickGetDealsButton();
});

Then(
  /^I validate that the following success message "([^"]*)" is displayed$/,
  function(expectedText) {
    TestPageObject.getDealsSuccessMessage(expectedText);
  }
);

When(/^I click on the Travelers dropdown$/, function() {
  TestPageObject.clickTravelersDropdown();
});

Then(/^I validate that "([^"]*)" is displayed by default for Adults$/, function(
  expectedValue
) {
  TestPageObject.byDefaultNumberForAdults(expectedValue);
});

Then(/^I validate that the Search button is displayed$/, function() {
  TestPageObject.validateSearchButtonIsDisplayed();
});

Then(/^I validate that the Search button is disabled$/, function() {
  TestPageObject.validateSearchButtonIsDisabled();
});

When(/^I click on Increment Adults button "([^"]*)" times$/, function(number) {
  TestPageObject.clickIncrementAdultsButton(number);
});

When(/^I delete email address from the Email input field$/, function() {
  TestPageObject.deleteEmailAddress();
});

Given(/^I access the following URL "([^"]*)"$/, function(url) {
  TestPageObject.openCustomURL(url);
});

Then(/^I wait for the Select Flights title to be displayed$/, function() {
  TestPageObject.waitForDisplayed();
});

When(/^I print flights prices from Departing list$/, function() {
  TestPageObject.departingFlightPrice();
});

When(/^I print the Flight number from Departing list$/, function() {
  TestPageObject.departingFlightNumber();
});

When(/^I print the Flight depart time from Departing list$/, function() {
  TestPageObject.departTime();
});

When(/^I print the Flight arrive time from Departing list$/, function() {
  TestPageObject.arriveTime();
});

When(
  /^I print the Seats available text for both Departing and Returning list$/,
  function() {
    TestPageObject.seatsAvailableText();
  }
);

When(/^I click on Accept All Cookies button from Flights page$/, function() {
  TestPageObject.clickAcceptAllCookiesButtonFlightsPage();
});

When(/^I click on Continue button from Flights page$/, function() {
  TestPageObject.clickContinueButtonFlightsPage();
});

Then(/^I wait for the Bundle page to be displayed$/, function() {
  TestPageObject.waitForBundlePageToBeDisplayed();
});

When(/^I calculate "([^"]*)" bundle discount$/, function(bundleType) {
  TestPageObject.calculateBundleDiscount(bundleType);
});

When(/^I get "([^"]*)" bundle$/, function(bundleType) {
  TestPageObject.getBundleDiscount(bundleType);
});

When(/^I click on Continue button from Bundles page$/, function() {
  TestPageObject.clickContinueButtonBundlesPage();
});

Then(/^I wait for the Travelers page to be displayed$/, function() {
  TestPageObject.waitForTravelersPageToBeDisplayed();
});

Then(/^I add First Name for both travelers$/, function() {
  TestPageObject.addTravelersFirstName();
});

Given(/^I get the current URL$/, function() {
  TestPageObject.getCurrentUrl();
});

When(/^I click on Accept All Cookies button from Bundles page$/, function() {
  TestPageObject.clickAcceptAllCookiesButtonBundlesPage();
});

Then(/^I select "([^"]*)" Bundle$/, function(bundleType) {
  TestPageObject.selectBundle(bundleType);
});

Then(/^I add "([^"]*)" in the First Name field$/, function(firstName) {
  TestPageObject.addTravelerFirstName(firstName);
});

Then(/^I add "([^"]*)" in the Last Name field$/, function(lastName) {
  TestPageObject.addTravelerLastName(lastName);
});

Then(/^I select adult Gender$/, function() {
  TestPageObject.selectTravelerGender();
});

Then(/^I choose Month "([^"]*)"$/, function(month) {
  TestPageObject.addMonthDob(month);
});

Then(/^I choose Day "([^"]*)"$/, function(day) {
  TestPageObject.addDayDob(day);
});

Then(/^I add "([^"]*)" year DOB$/, function(year) {
  TestPageObject.addYearDob(year);
});

When(/^I click on Accept All Cookies button from Travelers page$/, function() {
  TestPageObject.clickAcceptAllCookiesButtonTravelersPage();
});

When(/^I click on Continue button from Travelers page$/, function() {
  TestPageObject.clickContinueButtonTravelersPage();
});

Then(/^I wait for the Seats page to be displayed$/, function() {
  TestPageObject.waitForSeatsPageToBeDisplayed();
});

Then(
  /^I validate that Departing tab is highlighted on the Seats page$/,
  function() {
    TestPageObject.departingTabHighlighted();
  }
);

Then(/^I click on Continue button while on Departing tab$/, function() {
  TestPageObject.clickContinueDepartingTab();
});

Then(
  /^I validate that Returning tab is highlighted on the Seats page$/,
  function() {
    TestPageObject.returningTabHighlighted();
  }
);

Then(/^I click on No, thanks link from the Seats page$/, function() {
  TestPageObject.clickNoThanksLink();
});

Then(/^I wait for the Bags page to be displayed$/, function() {
  TestPageObject.waitForBagsPageToBeDisplayed();
});

Then(/^I validate that One-Carry On decrement button is disabled$/, function() {
  TestPageObject.carryOnDecrementButtonsIsDisabled();
});

Then(
  /^I validate that Checked Bags On decrement button is disabled$/,
  function() {
    TestPageObject.checkedBagsDecrementButtonsIsDisabled();
  }
);

Then(/^I click on Increment Carry-On button "([^"]*)" time$/, function(
  carryOnBags
) {
  TestPageObject.clickIncrementCarryOnBagsButton(carryOnBags);
});

Then(/^I validate that One-Carry On increment button is disabled/, function() {
  TestPageObject.carryOnIncrementButtonsIsDisabled();
});

Then(/^I click on Increment Checked Bags button "([^"]*)" times$/, function(
  checkedBags
) {
  TestPageObject.clickIncrementCheckedBagsButton(checkedBags);
});

Then(
  /^I validate that Checked Bags On increment button is disabled/,
  function() {
    TestPageObject.checkedBagsIncrementButtonsIsDisabled();
  }
);

When(/^I click on Add to cart button in order to add Trip Flex$/, function() {
  TestPageObject.addTripFlex();
});

Then(/^I validate that "([^"]*)" text is displayed$/, function(expectedText) {
  TestPageObject.validateAddedTripflexMessage(expectedText);
});

When(
  /^I click on Add to cart button in order to add Pet in Cabin$/,
  function() {
    TestPageObject.addPetInCabin();
  }
);

When(/^I click on Continue button from Bags page$/, function() {
  TestPageObject.clickContinueButtonBagsPage();
});

Then(/^I click on Continue button from the pop-up$/, function() {
  TestPageObject.clickContinuePopupBagsPage();
});

Then(/^I wait for the Hotels page to be displayed$/, function() {
  TestPageObject.waitForHotelsPageToBeDisplayed();
});

When(/^I click on Continue button from Hotels page$/, function() {
  TestPageObject.clickContinueButtonHotelsPage();
});

Then(/^I wait for the Cars page to be displayed$/, function() {
  TestPageObject.waitForCarsPageToBeDisplayed();
});

Then(/^I open the cart$/, function() {
  TestPageObject.openCart();
});

Then(/^I collect Pet in Cabin price$/, function() {
  TestPageObject.petInCabinPrice();
});

Then(
  /^I validate that the PETC price is also displayed in the Cart$/,
  function() {
    TestPageObject.petInCabinCartPrice();
  }
);

When(/^I close the cart$/, function() {
  TestPageObject.closeCart();
});

Then(/^I remove the PETC$/, function() {
  TestPageObject.removePetc();
});
