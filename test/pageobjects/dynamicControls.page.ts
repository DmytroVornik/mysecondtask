
import Page from './page'

class DynamicControlsPage extends Page {
    /**
     * define elements
     */
    //get removeButton() {return $('form#checkbox-example.button')};
    get removeButton() {return $('button*=Remove')};
    get enableButton() { return $('button*=Enable')};
    
    

    /**
     * define or overwrite page methods
     */
    open() {
        super.open('dynamic_controls')
    }

    
}
export default new DynamicControlsPage()