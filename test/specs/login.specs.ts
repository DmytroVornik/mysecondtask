import LoginPage from '../pageobjects/login.page'
import MainPage from '../pageobjects/main.page'

describe('Login Page', () => {
    beforeEach(() => {
        LoginPage.open();
    });

    it('Login ', () => {
        LoginPage.login();
        expect(MainPage.menu.loggedName.getText()).toEqual('qq');
        browser.pause(5000);
    });
});