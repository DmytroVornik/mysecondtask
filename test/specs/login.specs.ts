import LoginPage from '../pageobjects/login.page'

describe('Login Page', () => {
    beforeEach(() => {
        LoginPage.open();
    });

    it('Login ', () => {
        LoginPage.login();
        expect(LoginPage.loggedName.getText()).toEqual('qq')
    });
});