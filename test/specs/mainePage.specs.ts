import MainPage from '../pageobjects/mainPage.page'
import ProductCard from '../pageobjects/mainPage.page'

describe('Button Details is existing in #imageItem14', () => {
    //initial state for each test
    beforeEach(() => {
        MainPage.open();

    });
    it('Existing ', () => {
        expect(ProductCard.firstCard.detailsButton).toBeClickable();
        ProductCard.firstCard.detailsButton.click();

    });
});