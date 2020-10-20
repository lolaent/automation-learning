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
