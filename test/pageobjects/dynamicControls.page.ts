
import Page from './page'

class DynamicControlsPage extends Page {
    /**
     * define elements
     */
    get subheader() { return $('.subheader') };
    get removeButton():WebdriverIO.Element { return $('button*=Remove') };
    

    /**
     * define or overwrite page methods
     */
    open() {
        super.open('dynamic_controls')
    }

    
}
export default new DynamicControlsPage()