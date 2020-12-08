import BaseCard from './baseCard.page';
import { step } from './page';

class DetailsPage extends BaseCard {

    get buttonAddToCart() { return this.root.$('#aAddToCart') }
    get buttonBackToAll() { return this.root.$('#aBack') }
    constructor(){
        super('.content');
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