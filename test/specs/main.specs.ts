import MainPage from '../pageobjects/main.page'
import DetailsPage from '../pageobjects/details.page'
import LoginPage from '../pageobjects/login.page'
import CartPage from '../pageobjects/cart.page';
import AllureReporter from "@wdio/allure-reporter";



describe('main page', () => {
    beforeEach(() => {
        MainPage.open();
    });

    it('Add card to cart without login ', () => {
        expect(MainPage.menu.loggedName).not.toBeDisplayed();
        AllureReporter.startStep('Add one card rated 5 to cart');
        MainPage.search.setValuesForSearching({ ratingFrom: 5, ratingTo: 5 })
                       .pressSearch();
        MainPage.cards[0].open();
        browser.takeScreenshot();
        DetailsPage.addToCart();
        AllureReporter.endStep();
        expect(browser.getUrl()).toEqual('http://localhost:5054/login');
        LoginPage.setLoginAndPassword();
        expect(LoginPage.loginName.getValue()).toEqual('qq');
        expect(LoginPage.password.getValue()).toEqual('123');
        LoginPage.submit();
        expect(MainPage.menu.loggedName.getText()).toEqual('qq');
        AllureReporter.startStep('Add one card rated 5 to cart');
        MainPage.search.setValuesForSearching({ ratingFrom: 5, ratingTo: 5 })
                       .pressSearch();
        MainPage.cards[0].open();
        DetailsPage.addToCart();
        expect(MainPage.menu.itemsInCart.getText()).toEqual('1');
        MainPage.menu.goToCart();
        browser.takeScreenshot();
        AllureReporter.endStep();
        CartPage.emptyCart();
        MainPage.menu.logOut();
    });

    it('Add one card to cart with logged user', () => {
        MainPage.menu.aLogIn.click();
        expect(browser.getUrl()).toEqual('http://localhost:5054/login');
        LoginPage.setLoginAndPassword();
        expect(LoginPage.loginName.getValue()).toEqual('qq');
        expect(LoginPage.password.getValue()).toEqual('123');
        LoginPage.submit();
        AllureReporter.startStep('Add one cards rated 5 to cart');
        expect(MainPage.menu.loggedName).toBeDisplayed();
        MainPage.search.setValuesForSearching({ ratingFrom: 5, ratingTo: 5 })
                       .pressSearch();
        MainPage.cards[0].open();
        DetailsPage.addToCart();
        expect(MainPage.menu.itemsInCart.getText()).toEqual('1');
        MainPage.menu.goToCart();
        browser.takeScreenshot();
        AllureReporter.endStep();
        CartPage.emptyCart();
        MainPage.menu.logOut();
    });
});