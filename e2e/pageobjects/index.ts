import { browser } from 'protractor';
import { By } from '@angular/platform-browser';
const appHeader = element(by.css('h3'));
const genders   = element.all(by.css('h4'));
const catsUnderMaleCategory  = element.all(by.css('.Male')).all(by.css('li'));
const catsUnderFemaleCategory  = element.all(by.css('.Female')).all(by.css('li'));
const dashBoardPage = {
  get: function() {
    browser.get('/');
  },
  getHeader: function() {
    return appHeader.getText();
  },
  getGender: function(index) {
    return genders.get(index).getText();
  },
  getCatsUnderMaleCategory: function() {
    return catsUnderMaleCategory.getText();
  },
  getCatsUnderFemaleCategory: function() {
    return catsUnderFemaleCategory.getText();
  }
};

export default {
  dashBoardPage
};

