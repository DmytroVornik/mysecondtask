import MainPage from '../pageobjects/main.page'
import DetailsPage from '../pageobjects/details.page'
import CartPage from '../pageobjects/cart.page';
import { accountLogin, addCardToCart, setPreConditional } from '../utils/functions';
import { steps } from "../utils/reports"

const DEFAULT_USER = { login: 'qq', password: '123' }

describe('main page', () => {
    beforeEach(() => {
        MainPage.open();
        steps('set preconditions ', () => { setPreConditional(DEFAULT_USER) });

    });

    it('Add card to cart without login', () => {
        expect(MainPage.menu.loggedName).not.toBeDisplayed();
        steps('Add one card rated 5 to cart', () => {
            MainPage.search.setValuesForSearching({ ratingFrom: 5, ratingTo: 5 })
                .pressSearch();
            expect(MainPage.cards[0].getRating()).toEqual(5);
            MainPage.cards[0].pressButton();
            browser.takeScreenshot();
            DetailsPage.pressButton();
        });
        expect(browser.getUrl()).toEqual('http://localhost:5054/login');
        accountLogin(DEFAULT_USER)
        expect(MainPage.menu.loggedName.getText()).toEqual('qq');
        steps('Add one card rated 5 to cart', () => {
            MainPage.search.setValuesForSearching({ ratingFrom: 5, ratingTo: 5 })
                .pressSearch();
            expect(MainPage.cards[0].getRating()).toEqual(5);
            MainPage.cards[0].pressButton();
            expect(MainPage.menu.itemsInCart).not.toBeDisplayed();
            DetailsPage.pressButton();
            expect(MainPage.menu.itemsInCart.getText()).toEqual('1');
            MainPage.menu.goToCart();
            expect(CartPage.cards[0].count.getText()).toEqual('1');
            browser.takeScreenshot();
        });
    });

    it('Add one card to cart with logged user', () => {
        MainPage.menu.logIn();
        expect(browser.getUrl()).toEqual('http://localhost:5054/login');
        accountLogin(DEFAULT_USER);
        steps('Add one cards rated 5 to cart', () => {
            expect(MainPage.menu.loggedName).toBeDisplayed();
            MainPage.search.setValuesForSearching({ ratingFrom: 5, ratingTo: 5 })
                .pressSearch();
            expect(MainPage.cards[0].getRating()).toEqual(5);
            MainPage.cards[0].pressButton();
            expect(MainPage.menu.itemsInCart).not.toBeDisplayed();
            DetailsPage.pressButton();
            expect(MainPage.menu.itemsInCart.getText()).toEqual('1');
            MainPage.menu.goToCart();
            expect(CartPage.cards[0].count.getText()).toEqual('1');
            browser.takeScreenshot();
        });
    });

    it('Add three different card to cart with logged user', () => {
        MainPage.menu.logIn();
        expect(browser.getUrl()).toEqual('http://localhost:5054/login');
        accountLogin(DEFAULT_USER);
        steps('Add three different cards', () => {

            expect(MainPage.menu.itemsInCart).not.toBeDisplayed();
            addCardToCart(1);
            addCardToCart(2);
            addCardToCart(3);
            expect(MainPage.menu.itemsInCart.getText()).toEqual('3');
            MainPage.menu.goToCart();
            expect(CartPage.cards[0].count.getText()).toEqual('1');
            expect(CartPage.cards[1].count.getText()).toEqual('1');
            expect(CartPage.cards[2].count.getText()).toEqual('1');
            browser.takeScreenshot();
        });
    });

    it('Add three identical cards to cart with logged user', () => {
        MainPage.menu.logIn();
        expect(browser.getUrl()).toEqual('http://localhost:5054/login');
        accountLogin(DEFAULT_USER);
        steps('Add three identical cards', () => {
            expect(MainPage.menu.loggedName).toBeDisplayed();
            expect(MainPage.menu.itemsInCart).not.toBeDisplayed();
            addCardToCart(1);
            addCardToCart(1);
            addCardToCart(1);
            expect(MainPage.menu.itemsInCart.getText()).toEqual('1');
            MainPage.menu.goToCart();
            browser.takeScreenshot();
            expect(CartPage.cards[0].count.getText()).toEqual('3');
        });
    });
});