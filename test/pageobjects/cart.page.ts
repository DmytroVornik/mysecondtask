class CartPage {
    get buttonEmpty(){return $('#btnEmpty')}
    emptyCart(){
        this.buttonEmpty.click();
    }
}
export default new CartPage()