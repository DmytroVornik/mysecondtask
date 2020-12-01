// import DynamicControlsPage from '../pageobjects/dynamicControls.page'
// import allureReporter from '@wdio/allure-reporter'


// describe('dynamic controls', () => {
//     const text = "lol";
//     //initial state for each test
//     beforeEach(() => {
//         DynamicControlsPage.open();

//     });

//     it('existence of footer ', () => {
//         allureReporter.addSeverity('critical');
//         expect(DynamicControlsPage.footer).toHaveTextContaining('Powered by');
//         expect(DynamicControlsPage.footerLink).toHaveTextContaining('Elemental Selenium');
//         expect(DynamicControlsPage.footerLink).toHaveAttrContaining('href','http://elementalselenium.com/');
//     });

//     it('first form', () => {
//         allureReporter.addIssue('https://medium.com/southbridge/ci-cd-%D0%BF%D1%80%D0%B8%D0%BD%D1%86%D0%B8%D0%BF%D1%8B-%D0%B2%D0%BD%D0%B5%D0%B4%D1%80%D0%B5%D0%BD%D0%B8%D0%B5-%D0%B8%D0%BD%D1%81%D1%82%D1%80%D1%83%D0%BC%D0%B5%D0%BD%D1%82%D1%8B-f0626b9994c8');
//         expect(DynamicControlsPage.removeButton).toBeClickable();
//         expect(DynamicControlsPage.checkbox).toBeDisplayed();
//         DynamicControlsPage.clickRemoveButton()
//                            .waitingProgressBar()
//         expect(DynamicControlsPage.checkbox).not.toBeDisplayed();
//         expect(DynamicControlsPage.addButton).toBeClickable();
//         expect(DynamicControlsPage.messageCheckbox).toHaveTextContaining("It's gone!");
//         DynamicControlsPage.clickAddButton()
//                            .waitingProgressBar();
//         expect(DynamicControlsPage.messageCheckbox).toHaveTextContaining("It's back!");
//         expect(DynamicControlsPage.checkbox).toBeDisplayed();
        
//     });

//     it('second form', () => {

//         expect(DynamicControlsPage.inputField).toBeDisabled();
//         expect(DynamicControlsPage.enableButton).toBeClickable();
//         DynamicControlsPage.clickEnableButton()
//                            .waitingProgressBar();
//         expect(DynamicControlsPage.inputField).toBeEnabled();
//         expect(DynamicControlsPage.disableButton).toBeClickable();
//         expect(DynamicControlsPage.messageInput).toHaveTextContaining("It's enabled!");
//         DynamicControlsPage.setValue(text);
//         DynamicControlsPage.clickDisableButton()
//                            .waitingProgressBar();
//         expect(DynamicControlsPage.inputField).toBeDisabled();
//         expect(DynamicControlsPage.enableButton).toBeDisplayed();
//         expect(DynamicControlsPage.inputField).toHaveValue(text);
//         expect(DynamicControlsPage.messageInput).toHaveTextContaining("It's disabled!");
//     });
// });