import MainPage from '../pageobjects/main.page';
import LoginPage from '../pageobjects/login.page';
import CartPage from '../pageobjects/cart.page';
import DetailsPage from '../pageobjects/details.page';

export function addCardToCart(number) {
    MainPage.cards[number -1].pressButton();
    DetailsPage.pressButton();
    DetailsPage.backToAll();
}

export function setPreConditional(user) {
    if (MainPage.menu.aLogIn.isDisplayed()) {
        MainPage.menu.logIn();
        LoginPage.setLoginAndPassword(user);
        LoginPage.submit();
        MainPage.cards[0].pressButton();
        DetailsPage.pressButton();
        MainPage.menu.goToCart();
        CartPage.emptyCart();
        MainPage.menu.logOut();
    }
    else if (MainPage.menu.buttonItemsInCart.isDisplayed()) {
        MainPage.menu.goToCart();
        CartPage.emptyCart();
        MainPage.menu.logOut();
    }
    else {
        MainPage.menu.logOut();
    }
};

export function accountLogin({ login, password }) {
    LoginPage.setLoginAndPassword({ login, password });
    expect(LoginPage.loginName.getValue()).toEqual('qq');
    expect(LoginPage.password.getValue()).toEqual('123');
    LoginPage.submit();
};