import { step } from "../utils/reports"
import AllureReporter from "@wdio/allure-reporter"
import { Menu } from "./main.page"
import { Card } from "test/utils/cardBuilder"

class AddCardPage {
    get backToAddresses() { return $('#aBack') };
    get cardNumber() { return $('#tbNumber') };
    get cardCode() { return $('#tbCode') };
    get owner() { return $('#tbOwner') };
    get expirationDate() { return $('#tbexpirationDate') };
    get nickName() { return $('#tbNickname') };
    get buttonSaveAdd() { return $('#btnSave') };
    get buttonClear() { return $('#btnReset') };
    get buttonDelete() { return $('#btnDelete2') };
    get message() { return $('#divMsgOrErr') };

    menu = new Menu('.container');

    getPath() {
        return 'common/add_address';
    }
    getCardNumber() {
        return this.cardNumber.getValue();
    }
    getCardCode() {
        return this.cardCode.getValue();
    }
    getOwner() {
        return this.owner.getValue();
    }
    getExpirationDate() {
        return this.expirationDate.getValue();
    }
    getNickName() {
        return this.nickName.getValue();
    }
    getCard(): Card {
        return {
            cardNumber: this.getCardNumber(),
            cardCode: this.getCardCode(),
            owner: this.getOwner(),
            expirationDate: this.getExpirationDate(),
            nickName: this.getNickName(),
        }
    }
    @step()
    addCard(field: Card) {
        this. cardNumber.waitForClickable();
        this.cardNumber.setValue(field.cardNumber);
        this.cardCode.waitForClickable();
        this.cardCode.setValue(field.cardCode);
        this.owner.waitForClickable();
        this.owner.setValue(field.owner);
        field.expirationDate === undefined || this.expirationDate.setValue(field.expirationDate);
        this.nickName.waitForClickable();
        this.nickName.setValue(field.nickName);
        this.clickAddSave();
    }
    @step()
    goToCards() {
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
export default new AddCardPage()