import MainPage from '../pageobjects/mainPage.page'

describe('Button Details is existing in #imageItem14', () => {
    //initial state for each test
    beforeEach(() => {
        MainPage.open();

    });
    it('Existing ', () => {
        
        console.log(MainPage.cardList.getCard(3).getTitle());
        waits(5000);

    });
});