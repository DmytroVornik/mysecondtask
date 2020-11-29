import Page, { step } from './page'
import allureReporter from '@wdio/allure-reporter'

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

    @step()
    getPath() {
        allureReporter.addEnvironment('Browser', 'chrome');
        allureReporter.addStep("go to start page");
        return 'dynamic_controls';
        
    }
    @step()
    clickRemoveButton() {
        allureReporter.addStep("wait until the Remove button becomes enable");
        this.removeButton.waitForEnabled();
        allureReporter.addStep("click Remove button");
        this.removeButton.click();
        return this;
    }
    @step()
    clickAddButton() {
        allureReporter.addStep("wait until the Add button becomes enable");
        this.addButton.waitForEnabled();
        allureReporter.addStep("click Add button");
        this.addButton.click();
        return this;
    }
    @step()
    setValue(value: string) {
        allureReporter.startStep('exifghvbgyvbhjnftvgybhnjmjhgbygh');
        allureReporter.addStep("wait until the Input Field becomes enable");
        this.inputField.waitForEnabled();
        allureReporter.addStep("set value in Input field");
        this.inputField.setValue(value);
        browser.takeScreenshot();
        allureReporter.addAttachment('nameAtt', "string", 'text/plain');
        allureReporter.endStep('failed');
        return this;
    }
    @step()
    clickEnableButton() {
        allureReporter.addStep("wait until the Enable button becomes enable");
        this.enableButton.waitForEnabled();
        allureReporter.addStep("click Enable button");
        this.enableButton.click();
        return this;
    }
    @step()
    clickDisableButton() {
        allureReporter.addStep("click Disable button");
        this.disableButton.click();
        return this;
    }

    @step()
    waitingProgressBar() {
        allureReporter.addStep("waiting for the progress bar to appear");
        this.loadingImage.waitForDisplayed();
        allureReporter.addStep("waiting for the progress bar to disappear");
        this.loadingImage.waitForDisplayed({ reverse: true });
        return this;
    }
}
export default new DynamicControlsPage()