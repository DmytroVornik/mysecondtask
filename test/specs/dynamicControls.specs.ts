import DynamicControlsPage from '../pageobjects/dynamicControls.page'

describe('dynamic controls', () => {
    //initial state for each test
    beforeEach(() => {
        DynamicControlsPage.open();

    });

    

    it('first form', () => {
        
        DynamicControlsPage.clickRemoveButton(DynamicControlsPage.removeButton,DynamicControlsPage.loadingImage)
                           .clickAddButton(DynamicControlsPage.addButton);
                           
                           

    });



    it('second form', () => {

        DynamicControlsPage.clickEnableButton(DynamicControlsPage.enableButton, DynamicControlsPage.loadingImage)
                           .setValue(DynamicControlsPage.inputField,'dark')
                           .clickDisableButton(DynamicControlsPage.disableButton, DynamicControlsPage.loadingImage);

        
        
    });


});