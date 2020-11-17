import DynamicControlsPage from '../pageobjects/dynamicControls.page'

describe('dynamic controls', () => {
    //initial state for each test
    beforeEach(() => {
        DynamicControlsPage.open();

    });

     
    it('dynamic controls', () => {
        
        expect(DynamicControlsPage.removeButton).toBeClickable();

    });


});