import { Menu } from "./main.page"
import Page from "./page"

class AddressesPage extends Page {
    getPath(): string {
        return 'common/addresses'
    }
    menu = new Menu('.container')
    get address() { return $$('[id*=trAddress]')}

    selectAddress(street: string) {
        $(`=${street}`).click();
    }

}
export default new AddressesPage()