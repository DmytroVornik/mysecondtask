import MainPage from '../pageobjects/mainPage.page'
import ProductCard from '../pageobjects/productCard.page'

describe('Drag and Drop', () => {
    //initial state for each test
    beforeEach(() => {
        MainPage.open();

    });
    it('drag A to B ', () => {
        expect(ProductCard.firstCard.detailsButton).toBeDisplayed();

    });
});