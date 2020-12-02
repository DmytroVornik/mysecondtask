import Page from "./page";

class MainPage extends Page {
    getPath(): string {
        return '/';
    }
    firstCard = new ListProduct('#imageItem14');
}

class ListProduct {
    get root() { return $(this.selector) }
    get detailsButton() { return this.root.$('a.button') }
    get productPrice() { return this.root.$('#product-card__price') }
    get productCardTitle() { return this.root.$('product-card__title') }
    get ratingCard() { return this.root.$('div.product-card__description > div:nth-child(2)') }
    get textFirstDescription() { return this.root.$('div.product-card__description > div:nth-child(3)') }
    get textSecondDescription() { return this.root.$('div.product-card__description > div:nth-child(4)') }
    constructor(private selector: string) { }
}
class Search {

}

class Sidebar {

}
class Navbar {

}

export default new MainPage()


