
import { createJSDocReturnTag } from 'typescript'
import Page from './page'

class DynamicControlsPage extends Page {
    /**
     * define elements
     */
    //get removeButton() {return $('form#checkbox-example.button')};
    get removeButton() {return $('button*=Remove')};
    get addButton() {return $('button*=Add')};
    get enableButton() { return $('button*=Enable')};
    get disableButton() { return $('button*=Disable')};
    get inputField() { return $('form#input-example > input')};
    get loadingImage() { return $('div#loading')};
    
    

    /**
     * define or overwrite page methods
     */
    open() {
        super.open('dynamic_controls')
    }

    clickRemoveButton(removeButton, loadingImage){

        removeButton.waitForEnabled();
        removeButton.click();
        loadingImage.waitForExist();
        return this;
    }


    clickAddButton(addButton){
        
        addButton.waitForEnabled();
        addButton.click();
        return this;
    }

    setValue(inputField, value){
        inputField.waitForEnabled();
        inputField.setValue(value);
        return this;
    }

    clickEnableButton(enableButton, loadingImage ){
        enableButton.waitForEnabled();
        enableButton.click();
        loadingImage.waitForExist();
        return this;
    }

    clickDisableButton(disableButton, loadingImage){
        disableButton.click();
        loadingImage.waitForExist();
        return this;
    }

    

    

    
}
export default new DynamicControlsPage()