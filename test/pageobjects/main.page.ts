import Page from "./page"

class MainPage extends Page {
    getPath(): string {
        return '/';
    }
    search = new Search('.row');
    categories = new Categories('#divCategoryNames')
    menu = new Menu('.container');

    get cards() {
        return $$('.product-card')
            .map(value => new CardProduct('#' + value.getAttribute('id')));
    }
}

class CardProduct {
    private get root() { return $(this.selector) }
    get buttonDetails() { return this.root.$('a.button') }
    get picture() { return this.root.$('a > img') }
    get author() { return this.root.$('span') }
    get price() { return this.root.$('.product-card__price') }
    get title() { return this.root.$('.product-card__title') }
    get ratingLastChild() { return this.root.$('div.product-card__description > div:nth-child(2) > img:nth-child(5)') }
    get description() { return this.root.$('id*=imageItemDescription') }
    get tags() { return this.root.$('id*=imageItemTags') }
    constructor(private selector: string) { }

    getTitle() {
        return this.title.getText();
    }
    getAuthor() {
        return this.author.getText();
    }
    getPrice() {
        return this.price.getText();
    }
    getDescription() {
        return this.description.getText();
    }
    getTags() {
        return this.tags.getText();
    }
    open() {
        this.buttonDetails.click();
        return this;
    }
    getRating() {
        let lastStar = this.ratingLastChild.getAttribute('alt');
        let rating = 5 - Number(lastStar);
        return rating;
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

    setValuesForSearching(options: Options) {
        options.searchImage === undefined || this.searchImage.setValue(options.searchImage);
        options.ratingFrom === undefined || this.ratingFrom.setValue(options.ratingFrom);
        options.ratingTo === undefined || this.ratingTo.setValue(options.ratingTo);
        options.priceFrom === undefined || this.priceFrom.setValue(options.priceFrom);
        options.priceTo === undefined || this.priceTo.setValue(options.priceTo);
        return this;
    }
    pressSearch() {
        this.buttonSearch.click();
        return this;
    }
    pressReset() {
        this.buttonReset.click();
        return this;
    }
}

class Categories {
    private get root() { return $(this.selector) }
    constructor(private selector: string) { }

    selectCategory(nameCategory: string) {
        $(`=${nameCategory}`).click();
    }
}

class Menu {
    private get root() { return $(this.selector) }
    get buttonHome() { return this.root.$('#aHome') }
    get buttonSignUp() { return this.root.$('#aRegistration') }
    get buttonLogIn() { return this.root.$('#aLogin') }
    get buttonV() { return this.root.$('a.navbar-brand') }
    get loggedName() { return $('#sploggedInName') }
    get logOut() { return $('#aLogoutTop') }
    get itemsInCart() { return $('#spCartTopMsg') }
    get imgItemsInCart() { return $('#imgCartTop') }
    constructor(private selector: string) { }
}

type Options = {
    searchImage?: string,
    ratingFrom?: number,
    ratingTo?: number,
    priceFrom?: number,
    priceTo?: number
}
export default new MainPage()