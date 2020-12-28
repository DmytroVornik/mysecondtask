import { Menu } from "./main.page"
import { step } from "../utils/reports"
import { Address } from "../utils/addressBuilder"


class AddressesPage {
    menu = new Menu('.container')
    get addresses(): Address[] {
        return $$('[id*=trAddress]')
            .map(value => {
                return {
                    street: value.$('td:nth-child(2)').getText(),
                    streetAdditional: value.$('td:nth-child(3)').getText(),
                    city: value.$('td:nth-child(4)').getText(),
                    region: value.$('td:nth-child(5)').getText(),
                    postalCode: value.$('td:nth-child(6)').getText(),
                    addressNickname: value.$('td:nth-child(7)').getText()
                }
            });
    }

    @step()
    openAddress(street: string) {
        $(`=${street}`).click();
    }
}
export default new AddressesPage()