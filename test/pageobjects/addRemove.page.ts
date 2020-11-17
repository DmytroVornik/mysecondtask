
import Page from './page'

class AddRemovePage extends Page {
    /**
     * define elements
     */
    get addButton() { return $('button*=Add Element') };
    get listOfDeleteButtons() { return $$('.added-manually') };
    get firstDeleteButton() { return $('#elements button:first-child') };
    get lastDeleteButton() { return $('#elements button:last-child') };

    /**
     * define or overwrite page methods
     */
    open() {
        super.open('add_remove_elements/')
    }

    addDeleteButton(numberOfButtons) {
        for (let i = 0; i < numberOfButtons; i++){
            this.addButton.click();
        }
    }

    
}
export default new AddRemovePage()