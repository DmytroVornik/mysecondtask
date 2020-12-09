import BaseCard from './baseCard.page';
import AbstractCardPage from './abstractCard.page';
import { step } from "../utils/reports"

class DetailsPage extends AbstractCardPage {
    get buttonAddToCart() { return $('#aAddToCart') }
    get buttonBackToAll() { return $('#aBack') }
    constructor() {
        super('.content');
    }

    @step('Add card to cart')
    pressButton() {
        this.buttonAddToCart.waitForDisplayed();
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