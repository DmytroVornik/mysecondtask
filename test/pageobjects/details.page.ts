import { step } from './page';

class DetailsPage {
    get buttonAddToCart() { return $('#aAddToCart') }
    get buttonBackToAll() { return $('#aBack') }
    get author() { return $('id*=Author') }
    get price() { return $('class*=__value') }
    get title() { return $('id*=Title') }
    get rating() { return $$('[src="/images/star-active.svg"]') }
    get description() { return $('id*=Description') }
    get tags() { return $('id*=Tags') }



    @step()
    getRating() {
        return this.rating.length;
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
    addToCart(value = 1) {
        this.buttonAddToCart.waitForDisplayed();
        browser.takeScreenshot();
        for(let i = 0; i < value; i ++ ){
            this.buttonAddToCart.click();
        }   
        browser.takeScreenshot();
        return this;
    }
    @step()
    backToAll() {
        this.buttonBackToAll.click();
    }
}
export default new DetailsPage()