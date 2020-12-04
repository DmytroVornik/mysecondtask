// import detailsPage from 'test/pageobjects/details.page';
// import MainPage from '../pageobjects/main.page'
// import DetailsPage from '../pageobjects/details.page'
// import LoginPage from '../pageobjects/login.page'
// import CartPage from '../pageobjects/cart.page';


// describe('main page', () => {
//     beforeEach(() => {
//         MainPage.open();
//     });

//     it('Add card to cart without login ', () => {
//         expect(MainPage.menu.loggedName).not.toBeDisplayed();
//         MainPage.search.setValuesForSearching({ ratingFrom: 5, ratingTo: 5 })
//                        .pressSearch();
//         MainPage.cards[0].open();
//         DetailsPage.addToCart();
//         expect(browser.getUrl()).toEqual('http://localhost:5054/login');
//         LoginPage.login();
//         expect(MainPage.menu.loggedName.getText()).toEqual('qq');
//         MainPage.menu.buttonItemsInCart.click();
//         CartPage.emptyCart();
//         MainPage.menu.logOut.click();

//     });
//     it('Add card to cart with logged user', () => {
//         MainPage.menu.buttonLogIn.click();
//         LoginPage.login();
//         expect(MainPage.menu.loggedName).toBeDisplayed();
//         MainPage.search.setValuesForSearching({ ratingFrom: 5, ratingTo: 5 })
//                        .pressSearch();
//         MainPage.cards[0].open();
//         DetailsPage.addToCart();
//         expect(MainPage.menu.itemsInCart.getText()).toEqual('1');

//         CartPage


//     })
// });