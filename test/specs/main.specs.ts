import MainPage from '../pageobjects/main.page'
import DetailsPage from '../pageobjects/details.page'
import LoginPage from '../pageobjects/login.page'
import CartPage from '../pageobjects/cart.page';
import AllureReporter from "@wdio/allure-reporter";

describe('main page', () => {
    beforeEach(() => {
        MainPage.open();
        MainPage.setPreConditional();
        
    });

    it('Add card to cart without login', () => {
        expect(MainPage.menu.loggedName).not.toBeDisplayed();
        AllureReporter.startStep('Add one card rated 5 to cart');
        MainPage.search.setValuesForSearching({ ratingFrom: 5, ratingTo: 5 })
                       .pressSearch();
        expect(MainPage.cards[0].getRating()).toEqual(5);
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
        expect(MainPage.cards[0].getRating()).toEqual(5);
        MainPage.cards[0].open();
        expect(MainPage.menu.itemsInCart).not.toBeDisplayed();
        DetailsPage.addToCart();
        expect(MainPage.menu.itemsInCart.getText()).toEqual('1');
        MainPage.menu.goToCart();
        expect(CartPage.cards[0].count.getText()).toEqual('1');
        browser.takeScreenshot();
        AllureReporter.endStep();
    });

    it('Add one card to cart with logged user', () => {
        MainPage.menu.logIn();
        expect(browser.getUrl()).toEqual('http://localhost:5054/login');
        LoginPage.setLoginAndPassword();
        expect(LoginPage.loginName.getValue()).toEqual('qq');
        expect(LoginPage.password.getValue()).toEqual('123');
        LoginPage.submit();
        AllureReporter.startStep('Add one cards rated 5 to cart');
        expect(MainPage.menu.loggedName).toBeDisplayed();
        MainPage.search.setValuesForSearching({ ratingFrom: 5, ratingTo: 5 })
                       .pressSearch();
        expect(MainPage.cards[0].getRating()).toEqual(5);
        MainPage.cards[0].open();
        expect(MainPage.menu.itemsInCart).not.toBeDisplayed();
        DetailsPage.addToCart();
        expect(MainPage.menu.itemsInCart.getText()).toEqual('1');
        MainPage.menu.goToCart();
        expect(CartPage.cards[0].count.getText()).toEqual('1');
        browser.takeScreenshot();
        AllureReporter.endStep();
    });

    it('Add three different card to cart with logged user',() => {
        MainPage.menu.logIn();
        expect(browser.getUrl()).toEqual('http://localhost:5054/login');
        LoginPage.setLoginAndPassword();
        expect(LoginPage.loginName.getValue()).toEqual('qq');
        expect(LoginPage.password.getValue()).toEqual('123');
        LoginPage.submit();
        AllureReporter.startStep('Add three different cards');
        MainPage.cards[0].open();
        expect(MainPage.menu.itemsInCart).not.toBeDisplayed();
        DetailsPage.addToCart();
        DetailsPage.backToAll();
        MainPage.cards[1].open();
        DetailsPage.addToCart();
        DetailsPage.backToAll();
        MainPage.cards[2].open();
        DetailsPage.addToCart();
        DetailsPage.backToAll();
        expect(MainPage.menu.itemsInCart.getText()).toEqual('3');
        MainPage.menu.goToCart();
        expect(CartPage.cards[0].count.getText()).toEqual('1');
        expect(CartPage.cards[1].count.getText()).toEqual('1');
        expect(CartPage.cards[2].count.getText()).toEqual('1');
        browser.takeScreenshot();
        AllureReporter.endStep();
    });

    it('Add three identical cards to cart with logged user',() => {
        MainPage.menu.logIn();
        expect(browser.getUrl()).toEqual('http://localhost:5054/login');
        LoginPage.setLoginAndPassword();
        expect(LoginPage.loginName.getValue()).toEqual('qq');
        expect(LoginPage.password.getValue()).toEqual('123');
        LoginPage.submit();
        AllureReporter.startStep('Add three identical cards');
        expect(MainPage.menu.loggedName).toBeDisplayed();
        MainPage.cards[0].open();
        expect(MainPage.menu.itemsInCart).not.toBeDisplayed();
        DetailsPage.addToCart(3);
        expect(MainPage.menu.itemsInCart.getText()).toEqual('1');
        MainPage.menu.goToCart();
        browser.takeScreenshot();
        expect(CartPage.cards[0].count.getText()).toEqual('3');
        AllureReporter.endStep();

    });
});