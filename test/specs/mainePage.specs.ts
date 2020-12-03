import MainPage from '../pageobjects/mainPage.page'

describe('Button Details is existing in #imageItem14', () => {
    //initial state for each test
    beforeEach(() => {
        MainPage.open();

    });
    it('Existing ', () => {
        
        MainPage.list.selectCategory('Legend')
        waits(5000);

    });
});