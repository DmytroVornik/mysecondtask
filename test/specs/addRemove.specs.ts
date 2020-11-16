import AddRemovePage from '../pageobjects/addRemove.page'

describe('adding and removing', () => {
    //initial state for each test
    beforeEach(() => {
        AddRemovePage.open();

    });

    //zero state - press delete
    it('zero state - press Delete button ', () => {
       expect( AddRemovePage.addButton).toBeClickable();
       expect( AddRemovePage.deleteButton).not.toBeClickable();

    });

    //zero state - press add
    it('zero state - press Add button ', () => {
        expect(AddRemovePage.addButton).toBeClickable();
        expect(AddRemovePage.deleteButton).not.toBeClickable();

        AddRemovePage.addButton.click();
        expect(AddRemovePage.deleteButton).toBeElementsArrayOfSize(1);


    });


    it('first state - press Add button ', () => {
        expect(AddRemovePage.addButton).toBeClickable();
        AddRemovePage.addButton.click();

        expect(AddRemovePage.deleteButton).toBeClickable();
        expect(AddRemovePage.deleteButton).toBeElementsArrayOfSize(1);

        AddRemovePage.addButton.click();
        expect(AddRemovePage.deleteButton).toBeElementsArrayOfSize(2);
    });


    it('first state - press Delete button ', () => {

        AddRemovePage.addButton.click();
        expect(AddRemovePage.deleteButton).toBeClickable();
        expect(AddRemovePage.deleteButton).toBeElementsArrayOfSize(1);

        AddRemovePage.firstDeleteButton.click();

        expect(AddRemovePage.deleteButton).toBeElementsArrayOfSize(0);

    });

    it(('deleting middle button delete'), () => {

        AddRemovePage.addDeleteButton(3);
        expect(AddRemovePage.deleteButton).toBeElementsArrayOfSize({ gte: 3 });
        expect(AddRemovePage.deleteButton).toBeClickable();

        let len = Math.ceil(((AddRemovePage.deleteButton).length) / 2 - 1);
        AddRemovePage.deleteButton[len].click();
        expect( AddRemovePage.deleteButton).toBeElementsArrayOfSize(2);

    });

    it(('deleting first button delete'), () => {

        AddRemovePage.addDeleteButton(3);
        expect(AddRemovePage.deleteButton).toBeElementsArrayOfSize({ gte: 2 });
        expect(AddRemovePage.deleteButton).toBeClickable();

        AddRemovePage.firstDeleteButton.click();
        expect(AddRemovePage.deleteButton).toBeElementsArrayOfSize(2);


    });

    it(('deleting last button delete'), () => {

        AddRemovePage.addDeleteButton(3);
        expect(AddRemovePage.deleteButton).toBeElementsArrayOfSize({ gte: 2 });
        expect(AddRemovePage.deleteButton).toBeClickable();

        AddRemovePage.lastDeleteButton.click();
        expect(AddRemovePage.deleteButton).toBeElementsArrayOfSize(2);

    });

    

});