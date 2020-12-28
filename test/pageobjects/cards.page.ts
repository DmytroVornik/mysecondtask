import { Menu } from "./main.page"
import { step } from "../utils/reports"
import { Card } from "../utils/cardBuilder";

class CardsPage {
    menu = new Menu('.container')
    get cards(): Card[] {
        return $$('[id*=trCard]')
            .map(value => {
                return {
                    cardNumber: value.$('td:nth-child(2)').getText(),
                    cardCode: value.$('td:nth-child(3)').getText(),
                    owner: value.$('td:nth-child(4)').getText(),
                    expirationDate: value.$('td:nth-child(5)').getText(),
                    nickName: value.$('td:nth-child(6)').getText(),
                }
            });
    }

    @step()
    openCard(number: string) {
        $(`=${number}`).click();
    }
}
export default new CardsPage()