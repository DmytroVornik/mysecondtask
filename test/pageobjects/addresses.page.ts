import { Menu } from "./main.page"
import Page from "./page"
import { step } from "../utils/reports"


class AddressesPage extends Page {
    get id(){return $('td:nth-child(1)')}
    get street() { return $('td:nth-child(2)') };
    get streetAdditional() { return $('td:nth-child(3)') };
    get city() { return $('td:nth-child(4)') };
    get region() { return $('td:nth-child(5)') };
    get postalCode() { return $('td:nth-child(6)') };
    get Nickname() { return $('td:nth-child(7)') };
    getStreet() {
        return this.street;
    }

    getPath(): string {
        return 'common/addresses'
    }
    menu = new Menu('.container')
    get addresses() {
        return $$('[id*=trAddress]')
            .map(() => new AddressesPage());
    }
    

    @step()
    selectAddress(street: string) {
        $(`=${street}`).click();
    }

    existingAddressByCity(field: string) {
        for (let i = 0; i < this.addresses.length; i++) {
            if (this.addresses[i].city.getText() === field) {
                return true
            } else {
                return false;
            }

        }
    }

}
export default new AddressesPage()