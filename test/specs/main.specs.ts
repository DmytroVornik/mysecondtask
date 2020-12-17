import MainPage, { Menu } from '../pageobjects/main.page'
import DetailsPage from '../pageobjects/details.page'
import CartPage from '../pageobjects/cart.page';
import { accountLogin, addCardToCart, setPreConditionals } from '../utils/functions';
import { steps } from "../utils/reports"
import AddAddressPage from '../pageobjects/addAddress.page';
import AddressesPage from '../pageobjects/addresses.page';

const DEFAULT_USER = { login: 'qq', password: '123' }
const DEFAULT_ADDRESS = { city: 'khr', postalCode: '1388', region: 'khrka', street: 'cepobeda' }
const DEFAULT_EMPTY_ADDRESS = { city: '', postalCode: '', region: '', street: '' }

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
        expect(AddressesPage.existingAddress(DEFAULT_ADDRESS)).toBe(false);
        MainPage.menu.goToAddAddressPage();
        AddAddressPage.addAddress(DEFAULT_ADDRESS);
        expect(AddAddressPage.verifyThatFieldValuesAreEqual(DEFAULT_ADDRESS)).toBe(true);
        expect(AddAddressPage.message.getText()).toEqual('Created user address ' + DEFAULT_ADDRESS.street);
        AddAddressPage.goToAddresses();
        expect(AddressesPage.addresses.length).toBe(lengthAddressesBeforeAddingNewAddress + 1);
        expect(AddressesPage.existingAddress(DEFAULT_ADDRESS)).toBe(true);
        AddressesPage.selectAddress(DEFAULT_ADDRESS.street);
        expect(AddAddressPage.verifyThatFieldValuesAreEqual(DEFAULT_ADDRESS)).toBe(true);
        AddAddressPage.clickDelete();
        expect(AddAddressPage.message.getText()).toContain('Delete')
        expect(AddAddressPage.verifyThatFieldValuesAreEqual(DEFAULT_EMPTY_ADDRESS)).toBe(true);
        AddAddressPage.goToAddresses();
        expect(AddressesPage.addresses.length).toBe(lengthAddressesBeforeAddingNewAddress);
        expect(AddressesPage.existingAddress(DEFAULT_ADDRESS)).toBe(false);
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