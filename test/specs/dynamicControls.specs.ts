import DynamicControlsPage from '../pageobjects/dynamicControls.page'

describe('dynamic controls', () => {
    const text = "lol";
    //initial state for each test
    beforeEach(() => {
        DynamicControlsPage.open();

    });

    it('existence of footer ', () => {
        expect(DynamicControlsPage.footer).toHaveTextContaining('Powered by');
        expect(DynamicControlsPage.footerLink).toHaveTextContaining('Elemental Selenium');
        expect(DynamicControlsPage.footerLink).toHaveAttrContaining('href','http://elementalselenium.com/');
    });

    it('first form', () => {
        expect(DynamicControlsPage.removeButton).toBeClickable();
        expect(DynamicControlsPage.checkbox).toBeExisting();
        DynamicControlsPage.clickRemoveButton()
                           .displayOfProgressBarState()
        expect(DynamicControlsPage.checkbox).not.toBeExisting();
        expect(DynamicControlsPage.addButton).toBeClickable();
        expect(DynamicControlsPage.messageCheckbox).toHaveTextContaining("It's gone!");
        DynamicControlsPage.clickAddButton()
                           .displayOfProgressBarState();
        expect(DynamicControlsPage.messageCheckbox).toHaveTextContaining("It's back!");
        expect(DynamicControlsPage.checkbox).toBeExisting();
    });

    it('second form', () => {
        expect(DynamicControlsPage.inputField).toBeDisabled();
        expect(DynamicControlsPage.enableButton).toBeClickable();
        DynamicControlsPage.clickEnableButton()
                           .displayOfProgressBarState();
        expect(DynamicControlsPage.inputField).toBeEnabled();
        expect(DynamicControlsPage.disableButton).toBeClickable();
        expect(DynamicControlsPage.messageInput).toHaveTextContaining("It's enabled!");
        DynamicControlsPage.setValue(text);
        DynamicControlsPage.clickDisableButton()
                           .displayOfProgressBarState();
        expect(DynamicControlsPage.inputField).toBeDisabled();
        expect(DynamicControlsPage.enableButton).toBeExisting();
        expect(DynamicControlsPage.inputField).toHaveValue(text);
        expect(DynamicControlsPage.messageInput).toHaveTextContaining("It's disabled!");
    });
});