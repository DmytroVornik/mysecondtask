import MainPage, { Menu } from '../pageobjects/main.page'
import DetailsPage from '../pageobjects/details.page'
import CartPage from '../pageobjects/cart.page';
import { accountLogin, addCardToCart, setPreConditionals } from '../utils/functions';
import { steps } from "../utils/reports"
import AddAddressPage from '../pageobjects/addAddress.page';
import AddressesPage from '../pageobjects/addresses.page';
import { Address } from 'test/utils/addressBuilder';
import { AddressBuilder } from '../utils/addressBuilder';
import CardsPage from '../pageobjects/cards.page';
import AddCardPage from '../pageobjects/addCard.page';
import { Card, CardBuilder } from '../utils/cardBuilder';

const DEFAULT_USER = { login: 'qq', password: '123' }
const defaultAddress: Address = new AddressBuilder().build();
const defaultCard: Card = new CardBuilder().build();
const emptyAddress: Address = new AddressBuilder().getEmptyAddress().build()
const emptyCard: Card = new CardBuilder().getEmptyCard().build()

describe('main page', () => {
    beforeEach(() => {
        MainPage.open();
        setPreConditionals(DEFAULT_USER);
    });

    it('Add address', () => {
        MainPage.menu.logIn();
        expect(browser.getUrl()).toEqual(browser.options.baseUrl + '/login');
        accountLogin(DEFAULT_USER);
        MainPage.menu.goToAddressesPage();
        let lengthAddressesBeforeAddingNewAddress = AddressesPage.addresses.length;
        expect(AddressesPage.addresses).not.toContain(defaultAddress);
        MainPage.menu.goToAddAddressPage();
        AddAddressPage.addAddress(defaultAddress);
        browser.takeScreenshot();
        expect(AddAddressPage.getAddress()).toEqual(defaultAddress);
        expect(AddAddressPage.message.getText()).toEqual('Created user address ' + defaultAddress.street);
        AddAddressPage.goToAddresses();
        expect(AddressesPage.addresses.length).toBe(lengthAddressesBeforeAddingNewAddress + 1);
        expect(AddressesPage.addresses).toContain(defaultAddress);
        AddressesPage.openAddress(defaultAddress.street);
        expect(AddAddressPage.getAddress()).toEqual(defaultAddress);
        AddAddressPage.clickDelete();
        expect(AddAddressPage.message.getText()).toContain('Delete')
        expect(AddAddressPage.getAddress()).toEqual(emptyAddress);
        AddAddressPage.goToAddresses();
        expect(AddressesPage.addresses.length).toBe(lengthAddressesBeforeAddingNewAddress);
        expect(AddressesPage.addresses).not.toContain(defaultAddress);
    });


    it('Add card', () => {
        MainPage.menu.logIn();
        expect(browser.getUrl()).toEqual(browser.options.baseUrl + '/login');
        accountLogin(DEFAULT_USER);
        MainPage.menu.goToCardsPage();
        let lengthCardsBeforeAddingNewCard = CardsPage.cards.length;
        expect(CardsPage.cards).not.toContain(defaultCard);
        MainPage.menu.goToAddCardPage();
        AddCardPage.addCard(defaultCard);
        browser.takeScreenshot();
        expect(AddCardPage.getCard()).toEqual(defaultCard);
        expect(AddAddressPage.message.getText()).toEqual('Created payment card ' + defaultCard.cardNumber);
        AddCardPage.goToCards();
        expect(CardsPage.cards.length).toBe(lengthCardsBeforeAddingNewCard + 1);
        expect(CardsPage.cards).toContain(defaultCard);
        CardsPage.openCard(defaultCard.cardNumber);
        expect(AddCardPage.getCard()).toEqual(defaultCard);
        AddCardPage.clickDelete();
        expect(AddCardPage.message.getText()).toContain('Delete')
        expect(AddCardPage.getCard()).toEqual(emptyCard);
        AddCardPage.goToCards();
        expect(CardsPage.cards.length).toBe(lengthCardsBeforeAddingNewCard);
        expect(CardsPage.cards).not.toContain(defaultCard);
    });

    xit('Add card by title', () => {
        MainPage.menu.logIn();
        expect(browser.getUrl()).toEqual(browser.options.baseUrl + '/login');
        accountLogin(DEFAULT_USER);
        steps('Add card ', () => {
            expect(MainPage.menu.itemsInCart).not.toBeDisplayed();
            addCardToCart('Savannah N9 / 51kiloparsecs');
            expect(MainPage.menu.itemsInCart.getText()).toEqual('1');
            MainPage.menu.goToCart();
            expect(CartPage.findCardInCart('Savannah N9 / 51kiloparsecs')?.getTitle()).toEqual('Savannah N9 / 51kiloparsecs');
            browser.takeScreenshot();
        });
    });

    xit('Add card to cart without login', () => {
        expect(MainPage.menu.loggedName).not.toBeDisplayed();
        steps('Add one card rated 5 to cart', () => {
            MainPage.search.setValuesForSearching({ ratingFrom: 5, ratingTo: 5 })
                .pressSearch();
            expect(MainPage.cards[0].getRating()).toEqual(5);
            MainPage.cards[0].open();
            browser.takeScreenshot();
            DetailsPage.addToCart();
        });
        expect(browser.getUrl()).toEqual(browser.options.baseUrl + '/login');
        accountLogin(DEFAULT_USER)
        expect(MainPage.menu.loggedName.getText()).toEqual(DEFAULT_USER.login);
        steps('Add one card rated 5 to cart', () => {
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
        });
    });

    xit('Add one card to cart with logged user', () => {
        MainPage.menu.logIn();
        expect(browser.getUrl()).toEqual(browser.options.baseUrl + '/login');
        accountLogin(DEFAULT_USER);
        steps('Add one cards rated 5 to cart', () => {
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
        });
    });

    xit('Add three different card to cart with logged user', () => {
        MainPage.menu.logIn();
        expect(browser.getUrl()).toEqual(browser.options.baseUrl + '/login');
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

    xit('Add three identical cards to cart with logged user', () => {
        MainPage.menu.logIn();
        expect(browser.getUrl()).toEqual(browser.options.baseUrl + '/login');
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