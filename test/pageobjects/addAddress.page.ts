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

    menu = new Menu('.container');

    getPath() {
        return 'common/add_address';
    }
    getStreet() {
        return this.street.getValue();
    }
    getStreetAdditional() {
        return this.streetAdditional.getValue();
    }
    getCity() {
        return this.city.getValue();
    }
    getRegion() {
        return this.region.getValue();
    }
    getPostalCode() {
        return this.postalCode.getValue();
    }
    getAddressNickname() {
        return this.addressNickname.getValue();
    }
    getAddress(): Address {
        return {
            city: this.getCity(),
            postalCode: this.getPostalCode(),
            region: this.getRegion(),
            street: this.getStreet(),
            streetAdditional: this.getStreetAdditional(),
            addressNickname: this.getAddressNickname()
        }
    }
    @step()
    addAddress(field: Address) {
        AllureReporter.addStep('Enter street');
        this.street.waitForClickable();
        this.street.setValue(field.street);
        field.streetAdditional === undefined || this.streetAdditional.setValue(field.streetAdditional);
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
export type Address = {
    street: string,
    streetAdditional?: string,
    city: string,
    region: string,
    postalCode: string,
    addressNickname?: string
}
export default new AddAddressPage()