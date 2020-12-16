import { Menu } from "./main.page"
import { step } from "../utils/reports"

class AddressesPage {
    menu = new Menu('.container')
    get addresses() {
        return $$('[id*=trAddress]')
            .map(value => new Address('#' + value.getAttribute('id')));
    }

    @step()
    selectAddress(street: string) {
        $(`=${street}`).click();
    }
    @step()
    existingAddress({ city, postalCode, region, street }) {
        for (let i = 0; i < this.addresses.length; i++) {
            if (this.addresses[i].getCity() === city &&
                this.addresses[i].getPostalCode() === postalCode &&
                this.addresses[i].getRegion() === region &&
                this.addresses[i].getStreet() === street) {
                return true;
            }
        }
        return false;
    }
}

class Address {
    private get root() { return $(this.selector) }
    get id() { return this.root.$('td:nth-child(1)') }
    get street() { return this.root.$('td:nth-child(2)') };
    get streetAdditional() { return this.root.$('td:nth-child(3)') };
    get city() { return this.root.$('td:nth-child(4)') };
    get region() { return this.root.$('td:nth-child(5)') };
    get postalCode() { return this.root.$('td:nth-child(6)') };
    get nickname() { return this.root.$('td:nth-child(7)') };
    constructor(private selector: string) { }

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
}
export default new AddressesPage()