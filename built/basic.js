"use strict";
describe('webdriver.io page', () => {
    it('should have the right title', () => {
        browser.url('https://google.com');
        expect(browser).toHaveTitle('Google');
    });
});
