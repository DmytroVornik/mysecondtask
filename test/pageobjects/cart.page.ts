

import MainPage  from '../pageobjects/main.page';
import Page from './page';
class CartPage extends Page {
    get buttonEmpty(){return $('#btnEmpty')}
    get buttonPurchase(){return $('#btnPurchase')}
    get deliveryAddress(){return $('#slctAddress')}
    get paymentType(){return $('#slctPayment')}
    get totalPrise(){return $('#spCartTotal')}

    card = new CardProduct('.products-list')
    
    getPath(): string {
        return 'common/cart';
    }
    empty(){
        this.buttonEmpty.click();
    }
    purchase(){
        this.buttonPurchase.click();
    }
}
class CardProduct{
    private get root(){return $(this.selector)}
    get author(){return this.root.$('id*=imageItemsAuthor')}
    get title(){return this.root.$('id*=imageItemTitle')}
    get price(){return this.root.$('id*=imageItemPrice')}
    get count(){return this.root.$('id*=imageItemCount')}
    get decrement(){return this.root.$('[name=btnDec]')}
    get increment(){return this.root.$('[name=btnInc]')}
    get linkImg(){return this.root.$('a')}
    constructor(private selector: string){}
}
export default new CartPage()