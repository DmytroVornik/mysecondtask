import Page from "./page"

class MainPage extends Page {
    getPath(): string {
        return '/';
    }
    firstCard = new ListProduct('#imageItem14')
    search = new Search('#divSearch')
    navbar = new Navbar('.container')
    categoryEmpty = new Categories('#category1')
}

class ListProduct {
    private get root() { return $(this.selector) }
    get detailsButton() { return this.root.$('a.button') }
    get pictureButton() { return this.root.$('a.product-card__image') }
    get picture() { return this.root.$('a > img') }
    get pictureAuthor() { return this.root.$('span') }
    get productPrice() { return this.root.$('.product-card__price') }
    get productCardTitle() { return this.root.$('.product-card__title') }
    get ratingCard() { return this.root.$('div.product-card__description > div:nth-child(2)') }
    get textFirstDescription() { return this.root.$('div.product-card__description > div:nth-child(3)') }
    get textSecondDescription() { return this.root.$('div.product-card__description > div:nth-child(4)') }
    constructor(private selector: string) { }

    getTitle() {
        return this.productCardTitle.getText();
    }
    getAuthor() {
        return this.pictureAuthor.getText();
    }
    getPrice() {
        return this.productPrice.getText();
    }
    getDescription() {
        let first = this.textFirstDescription.getText();
        let second = this.textSecondDescription.getText();
        let description = first + second;
        return description;

    }
}
class Search {
    private get root() { return $(this.selector) }
    get inputSearchImage() { return this.root.$('input#tbTerm') }
    get inputRatingFrom() { return this.root.$('input#tbRatingFrom') }
    get inputRatingTo() { return this.root.$('input#tbRatingTo') }
    get inputPriceFrom() { return this.root.$('input#tbPriceFrom') }
    get inputPriceTo() { return this.root.$('input#tbPriceTo') }
    get buttonSearch() { return this.root.$('button#btnSearch') }
    get buttonReset() { return this.root.$('button#btnResetSearchCriteria') }
    constructor(private selector: string) { }

    setValue(value: number) {
        this.setValue(value);
        return this;
    }
    pressSearchButton() {
        this.buttonSearch.click();
        return this;
    }
    pressResetButton() {
        this.buttonReset.click();
        return this;
    }
}

class Categories {
    private get root() { return $(this.selector) }
    get img() { return this.root.$('img') }
    get link() { return this.root.$('a') }
    constructor(private selector: string) { }

}
class Navbar {
    private get root() { return $(this.selector) }
    get buttonHome() { return this.root.$('a#aHome') }
    get buttonSignUp() { return this.root.$('a#aRegistration') }
    get buttonLogIn() { return this.root.$('a#aLogin') }
    get buttonV() { return this.root.$('a.navbar-brand') }
    constructor(private selector: string) { }



}

export default new MainPage()


