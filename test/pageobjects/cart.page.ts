import { step } from "../utils/reports"
import BaseCard from "./baseCard.page"

class CartPage {
    get buttonEmpty() { return $('#btnEmpty') }
    get buttonPurchase() { return $('#btnPurchase') }
    get deliveryAddress() { return $('#slctAddress') }
    get paymentType() { return $('#slctPayment') }
    get totalPrise() { return $('#spCartTotal') }
    get cards() {
        return $$('.product-card')
            .map(value => new Card('#' + value.getAttribute('id')));
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

class Card extends BaseCard  {
    get count() { return this.root.$('[id*=Count]') }
    get decrement() { return this.root.$('[name=btnDec]') }
    get increment() { return this.root.$('[name=btnInc]') }
    get linkImg() { return this.root.$('a') }

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