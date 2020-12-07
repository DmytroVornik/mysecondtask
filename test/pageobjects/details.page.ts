import { step } from './page';

class DetailsPage {
    get buttonAddToCart() { return $('#aAddToCart') }
    get buttonBackToAll() { return $('#aBack') }
    get author() { return $('#divImageItemAuthor') }
    get price() { return $('.product__value') }
    get title() { return $('#tImageItemTitle') }
    get ratingLastChild() { return $('div.product-image > div > img:nth-child(5)') }
    get description() { return $('#divImageItemDescription') }
    get tags() { return $('#divImageItemTags') }

    @step()
    getRating() {
        let lastStar = this.ratingLastChild.getAttribute('alt');
        let rating = 5 - Number(lastStar);
        return rating;
    }
    @step()
    getTitle() {
        return this.title.getText();
    }
    @step()
    getAuthor() {
        return this.author.getText();
    }
    @step()
    getPrice() {
        return this.price.getText();
    }
    @step()
    getDescription() {
        return this.description.getText();
    }
    @step()
    getTags() {
        return this.tags.getText();
    }
    @step('Add card to cart')
    addToCart() {
        this.buttonAddToCart.waitForDisplayed();
        browser.takeScreenshot();
        this.buttonAddToCart.click();
        browser.takeScreenshot();
        return this;
    }
    @step()
    backToAll() {
        this.buttonBackToAll.click();
    }
}
export default new DetailsPage()