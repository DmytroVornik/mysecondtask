import MainPage from '../pageobjects/mainPage.page'

describe('Button Details is existing in #imageItem14', () => {
    //initial state for each test
    beforeEach(() => {
        MainPage.open();

    });
    it('Existing ', () => {
        let textTitle = MainPage.firstCard.getTitle();
        expect(textTitle).toEqual('Features of being in service in Arktika.');
        expect(MainPage.firstCard.getPrice()).toEqual('1.46')
    });
});