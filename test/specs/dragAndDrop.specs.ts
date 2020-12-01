import DragAndDrop from '../pageobjects/dragAndDrop.page';

describe('Drag and Drop', () => {
    //initial state for each test
    beforeEach(() => {
        DragAndDrop.open();

    });
    it('drag A to B ', () => {
        expect(DragAndDrop.columnA).toBeDisplayed();
        expect(DragAndDrop.columnB).toBeDisplayed();

        DragAndDrop.columnA.dragAndDrop(DragAndDrop.columnB, {duration:1000});

        expect(DragAndDrop.headerA.getText()).toEqual('B');
        expect(DragAndDrop.headerB.getText()).toEqual('A');
        
    });
});