import LoginPage from '../pageobjects/login.page';
import MainPage from '../pageobjects/main.page'

describe('main page', () => {
    beforeEach(() => {
        MainPage.open();
    });

    it('Existing ', () => {
        MainPage.menu.buttonV.click();
        MainPage.menu.buttonLogIn.click();
        expect(browser.getUrl().toString).toEqual('http://localhost:5054/login')
    });
});