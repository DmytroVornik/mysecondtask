
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

    clickRemoveButton(){

        this.removeButton.waitForEnabled();
        this.removeButton.click();
        this.loadingImage.waitForExist();
        return this;
    }


    clickAddButton(){
        
        this.addButton.waitForEnabled();
        this.addButton.click();
        return this;
    }

    setValue( value){
        this.inputField.waitForEnabled();
        this.inputField.setValue(value);
        return this;
    }

    clickEnableButton(){
        this.enableButton.waitForEnabled();
        this.enableButton.click();
        this.loadingImage.waitForExist();
        return this;
    }

    clickDisableButton(){
        this.disableButton.click();
        this.loadingImage.waitForExist();
        return this;
    }

    

    

    
}
export default new DynamicControlsPage()