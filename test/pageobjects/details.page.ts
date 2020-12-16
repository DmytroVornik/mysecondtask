import BaseCard from './baseCard.page';
import {Menu} from './main.page';
import CardPage from './card.page';
import { step } from "../utils/reports"

class DetailsPage extends CardPage {
    get buttonAddToCart() { return $('#aAddToCart') }
    get buttonBackToAll() { return $('#aBack') }
    constructor() {
        super('.content');
    }
    menu = new Menu('.container');

    @step('Add card to cart')
    addToCart() {
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