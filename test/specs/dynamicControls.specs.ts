import DynamicControlsPage from '../pageobjects/dynamicControls.page'

describe('dynamic controls', () => {
    //initial state for each test
    beforeEach(() => {
        DynamicControlsPage.open();

    });

    it('existence of footer ', () => {
        expect(DynamicControlsPage.footer).toHaveTextContaining('Powered by');
    });

    it('first form', () => {
        DynamicControlsPage.clickRemoveButton()
                           .displayOfProgressBar()
                           .clickAddButton()
                           .displayOfProgressBar();
    });

    it('second form', () => {
        DynamicControlsPage.clickEnableButton()
                           .displayOfProgressBar()
                           .setValue('lol')
                           .clickDisableButton()
                           .displayOfProgressBar(); 
    });
});