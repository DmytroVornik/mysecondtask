  
import Page from './page'

class AddRemovePage extends Page {
    /**
     * define elements
     */
    get addButton () {return $('button*=Add Element')};
    get deleteButton () { return $$('.added-manually')};
    get firstDeleteButton () {return $('#elements button:first-child')};
    get lastDeleteButton () {return $('#elements button:last-child')};

    /**
     * define or overwrite page methods
     */
    open () {
        super.open('add_remove_elements/')
    }

    clickAddButton () {
        this.addButton.click()
    }

    addDeleteButton(b) {
        for (let i = 0; i < b; i++)
            $(addButton).click();
    }
}
export default new AddRemovePage()