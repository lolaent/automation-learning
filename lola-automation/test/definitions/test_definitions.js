import { Given } from 'cucumber';
import TestPageObject from '../pageobjects/test_page_object.js';

Given(/^I access the URL "([^"]*)"$/, function(url) {
  TestPageObject.openURL(url);
});
