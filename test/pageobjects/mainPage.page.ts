import Page from "./page"
import Button from '../pageobjects/productCard.page'



class MainPage extends Page {

    getPath(): string {
        return '/';
    }




}
export default new MainPage()