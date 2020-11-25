import Page from './page'

class AddRemovePage extends Page {

    get addButton() { return $('button*=Add Element') };
    get listOfDeleteButtons() { return $$('.added-manually') };
    get firstDeleteButton() { return $('#elements button:first-child') };
    get lastDeleteButton() { return $('#elements button:last-child') };

    getPath() {
        return 'add_remove_elements/';
    }

    clickLastDeleteButton(){
        this.lastDeleteButton.click();
        return this;
    }

    clickDeleteButton(index: number = 0) {
        this.listOfDeleteButtons[index].click();
        return this;
    }

    clickAddButton(numberOfClicks: number = 1) {
        for (let i = 0; i < numberOfClicks; i++) {
            this.addButton.click();
        }
        return this;
    }
}
export default new AddRemovePage()