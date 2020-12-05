// import CartPage from '../pageobjects/cart.page'
// import LoginPage from '../pageobjects/login.page'
// import MainPage from '../pageobjects/main.page'
// import DetailsPage from '../pageobjects/details.page'


// describe('Login Page', () => {
//     beforeEach(() => {
//         MainPage.open();


//     });

//     it('Add card to cart with logged user', () => {
//         expect(MainPage.menu.buttonLogIn).toBeDisplayed();
//         MainPage.menu.buttonLogIn.click();
//         LoginPage.login();
//         MainPage.menu.loggedName.waitForDisplayed({timeout:10000});
//         expect(MainPage.menu.loggedName).toBeDisplayed();
//         MainPage.cards[0].open();
//         DetailsPage.addToCart();
//         MainPage.menu.buttonItemsInCart.click();
//         CartPage.cards[0].linkImg.click();
//         MainPage.menu.buttonItemsInCart.click();
//         CartPage.empty();
//         MainPage.menu.logOut.click();

//     });
// });