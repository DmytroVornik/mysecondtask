class DetailsPage {
    get buttonAddToCart() { return $('#aAddToCart') }
    get buttonBackToAll() { return $('#aBack') }
    get author() { return $('#divImageItemAuthor') }
    get price() { return $('.product__value') }
    get title() { return $('#tImageItemTitle') }
    get ratingLastChild() { return $('div.product-image > div > img:nth-child(5)') }
    get description() { return $('#divImageItemDescription') }
    get tags() { return $('#divImageItemTags') }

    getRating() {
        let lastStar = this.ratingLastChild.getAttribute('alt');
        let rating = 5 - Number(lastStar);
        return rating;
    }

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

    addToCart() {
        this.buttonAddToCart.click();
        return this;
    }
    backToAll() {
        this.buttonBackToAll.click();
    }
}
export default new DetailsPage()