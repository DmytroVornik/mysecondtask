import MainPage from '../pageobjects/main.page';
import LoginPage from '../pageobjects/login.page';
import CartPage from '../pageobjects/cart.page';
import DetailsPage from '../pageobjects/details.page';

export function addCardToCart(property: string | number) {
    if (typeof property === "number") {
        MainPage.cards[property - 1].open();
    } else {
        MainPage.search.searchImage.setValue(property);
        MainPage.search.pressSearch();
        browser.waitUntil(() => MainPage.cards[0].getTitle() === property)
        MainPage.cards[0].open();
    }
    DetailsPage.addToCart();
    DetailsPage.backToAll();
}

export function setPreConditionals(user) {
    if (!MainPage.menu.aLogIn.isDisplayed() && MainPage.menu.loggedName !== user.loginName) {
        MainPage.menu.logOut();
    }
    if (MainPage.menu.aLogIn.isDisplayed()) {
        MainPage.menu.logIn();
        LoginPage.setLoginAndPassword(user);
        LoginPage.submit();
    }
    if (MainPage.menu.buttonItemsInCart.isDisplayed()) {
        MainPage.menu.goToCart();
        CartPage.emptyCart();
    }
    MainPage.menu.logOut();
};

export function accountLogin({ login, password }) {
    LoginPage.setLoginAndPassword({ login, password });
    expect(LoginPage.loginName.getValue()).toEqual(login);
    expect(LoginPage.password.getValue()).toEqual(password);
    LoginPage.submit();
};