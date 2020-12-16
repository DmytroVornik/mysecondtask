import Page from "./page"
import { step } from "../utils/reports"
import AllureReporter from "@wdio/allure-reporter";



class AddAddressPage extends Page {
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

    getPath() {
        return 'common/add_address';
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
        this.buttonSaveAdd.click();
    }
    @step()
    goToAddresses() {
        this.backToAddresses.click();
    }
    @step()
    deleteAddress() {
        this.buttonDelete.click();
    }
}
type Fields = {
    street: string,
    streetAdditional?: string,
    city: string,
    region: string,
    postalCode: number,
    addressNickname?: string
}
export default new AddAddressPage()