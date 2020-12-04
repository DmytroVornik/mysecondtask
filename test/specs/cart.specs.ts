// import CartPage from '../pageobjects/cart.page'
// import LoginPage from '../pageobjects/login.page'
// import MainPage from '../pageobjects/main.page'
// import DetailsPage from '../pageobjects/details.page'


// describe('Login Page', () => {
//     beforeEach(() => {
//         MainPage.open();


//     });

//     it('Add card to cart with logged user', () => {
//         MainPage.menu.buttonLogIn.click();
//         LoginPage.login();
//         expect(MainPage.menu.loggedName).toBeDisplayed();
//         MainPage.search.setValuesForSearching({ ratingFrom: 5, ratingTo: 5 })
//             .pressSearch();
//         MainPage.cards[0].open();
//         DetailsPage.addToCart();
//         browser.pause(3000);
//         MainPage.menu.buttonItemsInCart.click();
//         CartPage.card.linkImg.click();
//         browser.pause(3000);
//     });
// });