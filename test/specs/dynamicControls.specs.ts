import DynamicControlsPage from '../pageobjects/dynamicControls.page'

describe('dynamic controls', () => {
    //initial state for each test
    beforeEach(() => {
        DynamicControlsPage.open();

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