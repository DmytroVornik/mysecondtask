
import Page from './page'

class AddRemovePage extends Page {
    /**
     * define elements
     */
    get addButton() { return $('button*=Add Element') };
    get listOfDeleteButtons() { return $$('.added-manually') };
    get firstDeleteButton() { return $('#elements button:first-child') };
    get lastDeleteButton() { return $('#elements button:last-child') };
    get footer() {return $('#page-footer') };

    /**
     * define or overwrite page methods
     */
    
    getPath(){
        return 'add_remove_elements/';
    }

    clickFirstDeleteButton(){
        this.firstDeleteButton.click();
        return this;
    }

    clickMiddleDeleteButton(){
        let middle = Math.floor(this.listOfDeleteButtons.length / 2);
            expect(middle).toEqual(1);
            this.listOfDeleteButtons[middle].click();
            return this;
    }

    clickLastDeleteButton(){
        this.lastDeleteButton.click();
        return this;
    }

    
    
     
    clickAddButton(numberOfClicks) {
        for (let i = 0; i < numberOfClicks; i++){
            this.addButton.click();
        }
        return this;
    }

    
}
export default new AddRemovePage()