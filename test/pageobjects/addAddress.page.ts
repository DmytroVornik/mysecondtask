import { step } from "../utils/reports"
import AllureReporter from "@wdio/allure-reporter"
import { Menu } from "./main.page"

class AddAddressPage {
    get backToAddresses() { return $('#aBack') };
    get street() { return $('#tbStreet') };
    get streetAdditional() { return $('#tbStreetAdditional') };
    get city() { return $('#tbCityName') };
    get region() { return $('#tbRegionName') };
    get postalCode() { return $('#tbPostalCode') };
    get addressNickname() { return $('#tbAddressNickname') };
    get buttonSaveAdd() { return $('#btnSave') };
    get buttonClear() { return $('#btnReset') };
    get buttonDelete() { return $('#btnDelete') };
    get message() { return $('#divMsgOrErr') };

    menu = new Menu('.container')

    getPath() {
        return 'common/add_address';
    }
    getStreet() {
        return this.street.getText();
    }
    getCity() {
        return this.city.getText();
    }
    getRegion() {
        return this.region.getText();
    }
    getPostalCode() {
        return this.postalCode.getText();
    }
    @step()
    makeSureTheAddressFieldsAreEmpty() {
        if (this.getCity() === '' &&
            this.getPostalCode() === '' &&
            this.getRegion() === '' &&
            this.getStreet() === '') {
            return true;
        }
        return false;
    }
    @step()
    addAddress(field: Fields) {
        AllureReporter.addStep('Enter street');
        this.street.waitForClickable();
        this.street.setValue(field.street);
        field.streetAdditional === undefined || this.street.setValue(field.streetAdditional);
        AllureReporter.addStep('Enter city');
        this.city.waitForClickable();
        this.city.setValue(field.city);
        AllureReporter.addStep('Enter region');
        this.region.waitForClickable();
        this.region.setValue(field.region);
        AllureReporter.addStep('Enter postal code');
        this.postalCode.waitForClickable();
        this.postalCode.setValue(field.postalCode);
        field.addressNickname === undefined || this.addressNickname.setValue(field.addressNickname);
        this.clickAddSave();
    }
    @step()
    goToAddresses() {
        this.backToAddresses.click();
    }
    @step()
    clickDelete() {
        this.buttonDelete.click();
    }
    @step()
    clickClear() {
        this.buttonClear.click();
    }
    @step()
    clickAddSave() {
        this.buttonSaveAdd.click();
    }
}
type Fields = {
    street: string,
    streetAdditional?: string,
    city: string,
    region: string,
    postalCode: string,
    addressNickname?: string
}
export default new AddAddressPage()