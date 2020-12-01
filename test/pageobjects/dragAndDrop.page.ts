import Page from './page'

class DragAndDrop extends Page{
    
    get columnA() { return $('#column-a') };
    get columnB() { return $('#column-b') };
    get headerA() {return $('#column-a > header')}
    get headerB() {return $('#column-b > header')}

    

    getPath() {
        return 'drag_and_drop';
    }

    
}
export default new DragAndDrop()