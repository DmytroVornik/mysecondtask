import Page from './page'

class AddRemovePage extends Page {

    get addButton() { return $('button*=Add Element') };
    get listOfDeleteButtons() { return $$('.added-manually') };
    get firstDeleteButton() { return $('#elements button:first-child') };
    get lastDeleteButton() { return $('#elements button:last-child') };

    getPath() {
        return 'add_remove_elements/';
    }

    clickDeleteButton(valueOfButton = this.firstDeleteButton) {
        valueOfButton.click();
        return this;
    }

    clickAddButton(numberOfClicks = 1) {
        for (let i = 0; i < numberOfClicks; i++) {
            this.addButton.click();
        }
        return this;
    }
}
export default new AddRemovePage()