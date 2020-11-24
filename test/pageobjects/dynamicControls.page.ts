import Page from './page'

class DynamicControlsPage extends Page {

    get removeButton() { return $('button*=Remove') };
    get addButton() { return $('button*=Add') };
    get enableButton() { return $('button*=Enable') };
    get disableButton() { return $('button*=Disable') };
    get inputField() { return $('form#input-example > input') };
    get loadingImage() { return $('div#loading') };
    get messageInput() { return $('form#input-example') };
    get messageCheckbox() { return $('form#checkbox-example') };
    get checkbox() { return $('#checkbox') };

    getPath() {
        return 'dynamic_controls';
    }

    clickRemoveButton() {
        this.removeButton.waitForEnabled();
        this.removeButton.click();
        return this;
    }

    clickAddButton() {
        this.addButton.waitForEnabled();
        this.addButton.click();
        return this;
    }

    setValue(value: string) {
        this.inputField.waitForEnabled();
        this.inputField.setValue(value);
        return this;
    }

    clickEnableButton() {
        this.enableButton.waitForEnabled();
        this.enableButton.click();
        return this;
    }

    clickDisableButton() {
        this.disableButton.click();
        return this;
    }

    displayOfProgressBar() {
        this.loadingImage.waitForDisplayed();
        this.loadingImage.waitForDisplayed({ reverse: true });
        return this;
    }
}
export default new DynamicControlsPage()