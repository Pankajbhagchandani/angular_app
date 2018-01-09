import { browser } from 'protractor';
import pages from './pageobjects';
describe('App', () => {

  beforeEach(() => {
    browser.get('/');
  });

  it('should have a title', () => {
    let subject = browser.getTitle();
    let result  = 'Angular 2 App';
    expect(subject).toEqual(result);
  });

  it('should have display DashBoard header', () => {
    expect(pages.dashBoardPage.getHeader()).toEqual('Welcome to the Pet Dashboard!!!');
  });

  it('should have display cats sorted by name grouped by category', () => {
    expect(pages.dashBoardPage.getHeader()).toEqual('Welcome to the Pet Dashboard!!!');
    expect(pages.dashBoardPage.getGender(0)).toEqual('Male');
    expect(pages.dashBoardPage.getGender(1)).toEqual('Female');
    expect(pages.dashBoardPage.getCatsUnderMaleCategory()).
    toEqual(['Garfield', 'Jim', 'Max', 'Tom']);
    expect(pages.dashBoardPage.getCatsUnderFemaleCategory()).
    toEqual(['Garfield', 'Simba', 'Tabby']);
  });

});
