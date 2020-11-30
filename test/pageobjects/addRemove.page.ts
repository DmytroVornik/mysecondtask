import Page, { step } from './page'

class AddRemovePage extends Page {

    get addButton() { return $('button*=Add Element') };
    get listOfDeleteButtons() { return $$('.added-manually') };
    get firstDeleteButton() { return $('#elements button:first-child') };
    get lastDeleteButton() { return $('#elements button:last-child') };

    
    @step()
    getPath() {
        return 'add_remove_elements/';
    }
    @step()
    clickLastDeleteButton(){
        this.lastDeleteButton.click();
        return this;
    }
    @step()
    clickDeleteButton(index: number = 0) {
        this.listOfDeleteButtons[index].click();
        return this;
    }
    @step()
    clickAddButton(numberOfClicks: number = 1) {
        for (let i = 0; i < numberOfClicks; i++) {
            this.addButton.click();
        }
        return this;
    }

    
}
export default new AddRemovePage()