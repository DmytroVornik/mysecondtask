import AllureReporter from "@wdio/allure-reporter";
import Page, { step } from "./page"
import LoginPage from './login.page';
import DetailsPage from './details.page';
import CartPage from '../pageobjects/cart.page';
import BaseCard from "./baseCard.page";



class MainPage extends Page {
    search = new Search('.row');
    categories = new Categories('#divCategoryNames')
    menu = new Menu('.container');
    get cards() {
        return $$('.product-card')
            .map(value => new CardProduct('#' + value.getAttribute('id')));
    }

    getPath(): string {
        return '/';
    }

    @step()
    setPreConditional() {
        if (this.menu.aLogIn.isDisplayed()) {
            this.menu.logIn();
            LoginPage.setLoginAndPassword();
            LoginPage.submit();
            this.cards[0].open();
            DetailsPage.addToCart();
            this.menu.goToCart();
            CartPage.emptyCart();
            this.menu.logOut();
        }

        else if (this.menu.buttonItemsInCart.isDisplayed()) {
            this.menu.goToCart();
            CartPage.emptyCart();
            this.menu.logOut();
        }
        else {
            this.menu.logOut();
        }

    }
}

class CardProduct extends BaseCard {
    
    get buttonDetails() { return this.root.$('a.button') }
    get picture() { return this.root.$('a > img') }

    @step()
    getRating() {
        return this.rating.length;
    }
    @step()
    getDescription() {
        return this.description.getText();
    }
    @step()
    getTags() {
        return this.tags.getText();
    }

    @step('Open card details')
    open() {
        this.buttonDetails.waitForDisplayed();
        browser.takeScreenshot();
        this.buttonDetails.click();
        browser.takeScreenshot()

    }
}


class Search {
    private get root() { return $(this.selector) }
    get searchImage() { return this.root.$('#tbTerm') }
    get ratingFrom() { return this.root.$('#tbRatingFrom') }
    get ratingTo() { return this.root.$('#tbRatingTo') }
    get priceFrom() { return this.root.$('#tbPriceFrom') }
    get priceTo() { return this.root.$('#tbPriceTo') }
    get buttonSearch() { return this.root.$('#btnSearch') }
    get buttonReset() { return this.root.$('#btnResetSearchCriteria') }
    constructor(private selector: string) { }

    @step()
    setValuesForSearching(options: Options) {
        options.searchImage === undefined || this.searchImage.setValue(options.searchImage);
        AllureReporter.addStep('Enter ratingFrom');
        options.ratingFrom === undefined || this.ratingFrom.setValue(options.ratingFrom);
        AllureReporter.addStep('Enter ratingTo');
        options.ratingTo === undefined || this.ratingTo.setValue(options.ratingTo);
        options.priceFrom === undefined || this.priceFrom.setValue(options.priceFrom);
        options.priceTo === undefined || this.priceTo.setValue(options.priceTo);
        return this;
    }
    @step()
    pressSearch() {
        this.buttonSearch.click();
        return this;
    }
    @step()
    pressReset() {
        this.buttonReset.click();
        return this;
    }
}

class Categories {
    private get root() { return $(this.selector) }
    constructor(private selector: string) { }

    @step()
    selectCategory(nameCategory: string) {
        $(`=${nameCategory}`).click();
    }
}

class Menu {
    private get root() { return $(this.selector) }
    get aHome() { return this.root.$('#aHome') }
    get aSignUp() { return this.root.$('#aRegistration') }
    get aLogIn() { return this.root.$('#aLogin') }
    get aV() { return this.root.$('a.navbar-brand') }
    get loggedName() { return this.root.$('#sploggedInName') }
    get aLogOut() { return this.root.$('#aLogoutTop') }
    get itemsInCart() { return this.root.$('#spCartTopMsg') }
    get buttonItemsInCart() { return this.root.$('#imgCartTop') }
    get aAddresses() { return this.root.$('#aAddresses') }
    get aAddAddress() { return this.root.$('#aAddAddress') }
    get aCards() { return this.root.$('#aCards') }
    get aAddCard() { return this.root.$('#aAddCard') }
    get aEditProfile() { return this.root.$('#aEditProfile') }
    constructor(private selector: string) { }

    @step()
    goToHome() {
        this.aHome.click();
    }
    @step()
    signUp() {
        this.aSignUp.click();
    }
    @step()
    logIn() {
        this.aLogIn.click();
    }
    @step()
    pressV() {
        this.aV.click();
    }
    @step()
    logOut() {
        this.aLogOut.click();
    }
    @step()
    goToCart() {
        this.buttonItemsInCart.click();
    }
    @step()
    showAddresses() {
        this.aAddresses.click();
    }
    @step()
    showCards() {
        this.aCards.click();
    }
    @step()
    addCard() {
        this.aAddCard.click();
    }
    @step()
    addAddress() {
        this.aAddAddress.click();
    }
    @step()
    editProfile() {
        this.aEditProfile.click()
    }
}

type Options = {
    searchImage?: string,
    ratingFrom?: number,
    ratingTo?: number,
    priceFrom?: number,
    priceTo?: number
}
export default new MainPage()

