class DetailsPage {
    get buttonAddToCart() { return $('#aAddToCart') }
    get buttonBackToAll() { return $('#aBack') }


    addToCart() {
        this.buttonAddToCart.click();
        return this;
    }
    backToAll() {
        this.buttonBackToAll.click();

    }

}
export default new DetailsPage()