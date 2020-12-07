import Page, { step } from './page';

class CartPage extends Page {
    get buttonEmpty() { return $('#btnEmpty') }
    get buttonPurchase() { return $('#btnPurchase') }
    get deliveryAddress() { return $('#slctAddress') }
    get paymentType() { return $('#slctPayment') }
    get totalPrise() { return $('#spCartTotal') }
    get cards() {
        return $$('.product-card')
            .map(value => new CardProduct('#' + value.getAttribute('id')));
    }
    getPath(): string {
        return 'common/cart';
    }
    @step()
    emptyCart() {
        this.buttonEmpty.click();
    }
    @step()
    purchase() {
        this.buttonPurchase.click();
    }
}
class CardProduct {
    private get root() { return $(this.selector) }
    get author() { return this.root.$('id*=Author') }
    get title() { return this.root.$('id*=Title') }
    get price() { return this.root.$('id*=Price') }
    get count() { return this.root.$('div.product-card__price > span:nth-child(3)') }
    get decrement() { return this.root.$('[name=btnDec]') }
    get increment() { return this.root.$('[name=btnInc]') }
    get linkImg() { return this.root.$('a') }
    constructor(private selector: string) { }
    @step()
    clickPlus() {
        this.increment.click();
    }
    @step()
    clickMinus() {
        this.decrement.click();
    }
    @step()
    goToCardDetails() {
        this.linkImg.click();
    }
}
export default new CartPage()