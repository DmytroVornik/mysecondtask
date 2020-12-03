import Page from "./page"

class MainPage extends Page {
    getPath(): string {
        return '/';
    }
    
    firstCard = new ListProducts('.products-list')
    search = new Search('#divSearch')
    navbar = new Navbar('.container')
    list = new Categories('#divCategoryNames')

}

class ListProducts {
    private get root() { return $(this.selector) }
    get detailsButton() { return this.root.$('a.button') }
    get pictureButton() { return this.root.$('a.product-card__image') }
    get picture() { return this.root.$('a > img') }
    get pictureAuthor() { return this.root.$('span') }
    get productPrice() { return this.root.$('.product-card__price') }
    get productCardTitle() { return this.root.$('.product-card__title') }
    get ratingCard() { return this.root.$('div.product-card__description > div:nth-child(2)') }
    get ratingCardLastChild() { return this.root.$('div.product-card__description > div:nth-child(2) > img:nth-child(5)') }
    get textDescription() { return this.root.$('id*=imageItemDescription') }
    get textTags() { return this.root.$('id*=imageItemTags') }
    get listProducts() { return this.root.$$('id*=imageItem') }
    constructor(private selector: string) { }


    initCards() {

    }


    getTitle() {
        return this.productCardTitle.getText();
    }
    getAuthor() {
        return this.pictureAuthor.getText();
    }
    getPrice() {
        return this.productPrice.getText();
    }
    getTextDescription() {
        return this.textDescription.getText();
    }
    getTextTags() {
        return this.textTags.getText();
    }
    open() {
        this.detailsButton.click();
    }
    getRating() {
        let lastStar = this.ratingCardLastChild.getAttribute('alt');
        let rating = 5 - Number(lastStar);
        return rating;
    }
}

class Search {
    private get root() { return $(this.selector) }
    get inputSearchImage() { return this.root.$('#tbTerm') }
    get inputRatingFrom() { return this.root.$('#tbRatingFrom') }
    get inputRatingTo() { return this.root.$('#tbRatingTo') }
    get inputPriceFrom() { return this.root.$('#tbPriceFrom') }
    get inputPriceTo() { return this.root.$('#tbPriceTo') }
    get buttonSearch() { return this.root.$('#btnSearch') }
    get buttonReset() { return this.root.$('#btnResetSearchCriteria') }
    constructor(private selector: string) { }

    setValuesForSearching(options?: Options) {
        this.inputSearchImage.setValue(options?.SearchImage);
        this.inputRatingFrom.setValue(options?.RatingFrom);
        this.inputRatingTo.setValue(options?.RatingTo);
        this.inputPriceFrom.setValue(options?.PriceFrom);
        this.inputPriceTo.setValue(options?.PriceTo);
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
    get listLink() { return this.root.$$('a') }
    constructor(private selector: string) { }

    selectCategory(nameCategory) {
        for (let i = 0; i < this.listLink.length; i++)
            if (this.listLink[i].getText() === nameCategory)
                this.listLink[i].click();
    }
}

class Navbar {
    private get root() { return $(this.selector) }
    get buttonHome() { return this.root.$('a#aHome') }
    get buttonSignUp() { return this.root.$('a#aRegistration') }
    get buttonLogIn() { return this.root.$('a#aLogin') }
    get buttonV() { return this.root.$('a.navbar-brand') }
    constructor(private selector: string) { }
}

type Options = {
    SearchImage?: any,
    RatingFrom?: any,
    RatingTo?: any,
    PriceFrom?: any,
    PriceTo?: any,

}
export default new MainPage()


