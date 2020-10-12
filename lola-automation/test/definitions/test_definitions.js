import { Given } from 'cucumber';
import TestPageObject from '../pageobjects/test_page_object.js';

Given(/^I access the DEV URL$/, function() {
  TestPageObject.openDEVURL();
});
