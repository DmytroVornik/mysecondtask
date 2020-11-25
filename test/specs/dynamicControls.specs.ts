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
        expect(DynamicControlsPage.checkbox).toBeDisplayed();
        DynamicControlsPage.clickRemoveButton()
                           .waitingProgressBar()
        expect(DynamicControlsPage.checkbox).not.toBeDisplayed();
        expect(DynamicControlsPage.addButton).toBeClickable();
        expect(DynamicControlsPage.messageCheckbox).toHaveTextContaining("It's gone!");
        DynamicControlsPage.clickAddButton()
                           .waitingProgressBar();
        expect(DynamicControlsPage.messageCheckbox).toHaveTextContaining("It's back!");
        expect(DynamicControlsPage.checkbox).toBeDisplayed();
    });

    it('second form', () => {
        expect(DynamicControlsPage.inputField).toBeDisabled();
        expect(DynamicControlsPage.enableButton).toBeClickable();
        DynamicControlsPage.clickEnableButton()
                           .waitingProgressBar();
        expect(DynamicControlsPage.inputField).toBeEnabled();
        expect(DynamicControlsPage.disableButton).toBeClickable();
        expect(DynamicControlsPage.messageInput).toHaveTextContaining("It's enabled!");
        DynamicControlsPage.setValue(text);
        DynamicControlsPage.clickDisableButton()
                           .waitingProgressBar();
        expect(DynamicControlsPage.inputField).toBeDisabled();
        expect(DynamicControlsPage.enableButton).toBeDisplayed();
        expect(DynamicControlsPage.inputField).toHaveValue(text);
        expect(DynamicControlsPage.messageInput).toHaveTextContaining("It's disabled!");
    });
});