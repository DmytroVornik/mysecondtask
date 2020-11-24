import DynamicControlsPage from '../pageobjects/dynamicControls.page'

describe('dynamic controls', () => {
    const text = "lol";
    //initial state for each test
    beforeEach(() => {
        DynamicControlsPage.open();

    });

    it('existence of footer ', () => {
        expect(DynamicControlsPage.footer).toHaveTextContaining('Powered by');
    });

    it('first form', () => {
        expect(DynamicControlsPage.removeButton).toBeClickable();
        expect(DynamicControlsPage.checkbox).toBeExisting();
        DynamicControlsPage.clickRemoveButton()
                           .displayOfProgressBar()
        expect(DynamicControlsPage.checkbox).not.toBeExisting();
        expect(DynamicControlsPage.addButton).toBeClickable();
        expect(DynamicControlsPage.messageCheckbox).toHaveTextContaining("It's gone!");
        DynamicControlsPage.clickAddButton()
                           .displayOfProgressBar();
        expect(DynamicControlsPage.messageCheckbox).toHaveTextContaining("It's back!");
        expect(DynamicControlsPage.checkbox).toBeExisting();
    });

    it('second form', () => {
        expect(DynamicControlsPage.inputField).toBeDisabled();
        expect(DynamicControlsPage.enableButton).toBeClickable();
        DynamicControlsPage.clickEnableButton()
                           .displayOfProgressBar();
        expect(DynamicControlsPage.inputField).toBeEnabled();
        expect(DynamicControlsPage.disableButton).toBeClickable();
        expect(DynamicControlsPage.messageInput).toHaveTextContaining("It's enabled!");
        DynamicControlsPage.setValue(text);
        DynamicControlsPage.clickDisableButton()
                           .displayOfProgressBar();
        expect(DynamicControlsPage.inputField).toBeDisabled();
        expect(DynamicControlsPage.enableButton).toBeExisting();
        expect(DynamicControlsPage.inputField).toHaveValue(text);
        expect(DynamicControlsPage.messageInput).toHaveTextContaining("It's disabled!");
    });
});