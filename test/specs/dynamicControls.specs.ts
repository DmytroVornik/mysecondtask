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
                           .clickAddButton();
                           
                           

    });



    it('second form', () => {

        DynamicControlsPage.clickEnableButton()
                           .setValue('lol')
                           .clickDisableButton();

        
        
    });


});