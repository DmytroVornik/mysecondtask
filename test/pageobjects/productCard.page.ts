class ProductCard{
    firstCard = new Button('#imageItem14');
}
export default new ProductCard()

class Button {
    private get root() { return $(this.selector) }
    get detailsButton() { return this.root.$('button*=Details') }
    constructor(private selector: string) { }
}
class Price{
    private get root() { return $(this.selector) }
    get productPrice() { return this.root.$('#product-card__price') }
    constructor(private selector: string) { }
}
class Title{
    private get root() { return $(this.selector) }
    get productCardTitle() { return this.root.$('product-card__title') }
    constructor(private selector: string) { }
}
class Rating{
    private get root() { return $(this.selector) }
    get ratingCard() { return this.root.$('div.product-card__description > div:nth-child(2)') }
    constructor(private selector: string) { }
}
class TextDescription{
    private get root() { return $(this.selector) }
    get textFirstDescription() { return this.root.$('div.product-card__description > div:nth-child(3)') }
    get textSecondDescription() { return this.root.$('div.product-card__description > div:nth-child(4)') }
    constructor(private selector: string) { } 
}
