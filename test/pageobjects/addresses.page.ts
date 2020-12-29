import { Menu } from "./main.page"
import { step } from "../utils/reports"
import { Address } from "../utils/addressBuilder"


class AddressesPage {
    menu = new Menu('.container')
    get addresses(): Address[] {
        return $$('[id*=trAddress]')
            .map(value => {
                return new Address(
                    value.$('td:nth-child(2)').getText(),
                    value.$('td:nth-child(4)').getText(),
                    value.$('td:nth-child(5)').getText(),
                    value.$('td:nth-child(6)').getText(),
                    value.$('td:nth-child(3)').getText(),
                    value.$('td:nth-child(7)').getText()
            )
            });
    }

    @step()
    openAddress(street: string) {
        $(`=${street}`).click();
    }
}
export default new AddressesPage()