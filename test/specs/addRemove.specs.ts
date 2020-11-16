import AddRemovePage from '../pageobjects/addRemove.page'

describe('adding and removing', () => {
    //initial state for each test
    beforeEach(() => {
        AddRemovePage.open();

    });

    //zero state - press delete
    it('zero state - press Delete button ', () => {
       expect( AddRemovePage.addButton).toBeClickable();
       expect( AddRemovePage.deleteButtons).not.toBeClickable();

    });

    //zero state - press add
    it('zero state - press Add button ', () => {
        expect(AddRemovePage.addButton).not.toBeClickable();
        expect(AddRemovePage.deleteButtons).not.toBeClickable();

        AddRemovePage.addButton.click();
        expect(AddRemovePage.deleteButtons).toBeElementsArrayOfSize(1);


    });


    it('first state - press Add button ', () => {
        expect(AddRemovePage.addButton).toBeClickable();
        AddRemovePage.addButton.click();

        expect(AddRemovePage.deleteButtons).toBeClickable();
        expect(AddRemovePage.deleteButtons).toBeElementsArrayOfSize(1);

        AddRemovePage.addButton.click();
        expect(AddRemovePage.deleteButtons).toBeElementsArrayOfSize(2);
    });


    it('first state - press Delete button ', () => {

        AddRemovePage.addButton.click();
        expect(AddRemovePage.deleteButtons).toBeClickable();
        expect(AddRemovePage.deleteButtons).toBeElementsArrayOfSize(1);

        AddRemovePage.firstDeleteButton.click();

        expect(AddRemovePage.deleteButtons).toBeElementsArrayOfSize(0);

    });

    it(('deleting middle button delete'), () => {

        AddRemovePage.addDeleteButton(3);
        expect(AddRemovePage.deleteButtons).toBeElementsArrayOfSize({ gte: 3 });
        expect(AddRemovePage.deleteButtons).toBeClickable();

        let len = Math.ceil(((AddRemovePage.deleteButtons).length) / 2 - 1);
        AddRemovePage.deleteButtons[len].click();
        expect( AddRemovePage.deleteButtons).toBeElementsArrayOfSize(2);

    });

    it(('deleting first button delete'), () => {

        AddRemovePage.addDeleteButton(3);
        expect(AddRemovePage.deleteButtons).toBeElementsArrayOfSize({ gte: 2 });
        expect(AddRemovePage.deleteButtons).toBeClickable();

        AddRemovePage.firstDeleteButton.click();
        expect(AddRemovePage.deleteButtons).toBeElementsArrayOfSize(2);


    });

    it(('deleting last button delete'), () => {

        AddRemovePage.addDeleteButton(3);
        expect(AddRemovePage.deleteButtons).toBeElementsArrayOfSize({ gte: 2 });
        expect(AddRemovePage.deleteButtons).toBeClickable();

        AddRemovePage.lastDeleteButton.click();
        expect(AddRemovePage.deleteButtons).toBeElementsArrayOfSize(2);

    });

    

});