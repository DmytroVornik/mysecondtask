  
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
        super.open('https://the-internet.herokuapp.com/add_remove_elements/')
    }

   

    addDeleteButton(b) {
        for (let i = 0; i < b; i++)
        this.addButton.click();
    }
}
export default new AddRemovePage()