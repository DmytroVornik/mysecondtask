import DynamicControlsPage from '../pageobjects/dynamicControls.page'

describe('dynamic controls', () => {
    //initial state for each test
    beforeEach(() => {
        DynamicControlsPage.open();

    });

     
    it('dynamic controls', () => {
        
        DynamicControlsPage.removeButton.click();
        DynamicControlsPage.removeButton
        

    });

    it('should detect when element is clickable', () => {
        
        DynamicControlsPage.removeButton.waitForClickable({ timeout: 3000 });
    });

    it('should detect when element is no longer clickable', () => {
        DynamicControlsPage.removeButton.waitForClickable({ reverse: true });
    });


});