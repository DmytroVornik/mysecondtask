import AddRemovePage from '../pageobjects/addRemove.page'

describe('adding and removing', () => {
    //initial state for each test
    beforeEach(() => {
        AddRemovePage.open();

    });

    //zero state - press delete
    it('zero state - press Delete button ', () => {
        expect(AddRemovePage.addButton).toBeClickable();
        AddRemovePage.listDeleteButtonsNotToBeClickable(AddRemovePage.listOfDeleteButtons);

    });

    //zero state - press add
    it('zero state - press Add button ', () => {
        expect(AddRemovePage.addButton).toBeClickable();
        AddRemovePage.listDeleteButtonsToBeClickable(AddRemovePage.listOfDeleteButtons);

        AddRemovePage.addButton.click();
        expect(AddRemovePage.listOfDeleteButtons).toBeElementsArrayOfSize(1);


    });

    //first state - press add
    it('first state - press Add button ', () => {
        expect(AddRemovePage.addButton).toBeClickable();
        AddRemovePage.addButton.click();

        AddRemovePage.listDeleteButtonsToBeClickable(AddRemovePage.listOfDeleteButtons);
        expect(AddRemovePage.listOfDeleteButtons).toBeElementsArrayOfSize(1);

        AddRemovePage.addButton.click();
        expect(AddRemovePage.listOfDeleteButtons).toBeElementsArrayOfSize(2);
    });

    //first state - press delete
    it('first state - press Delete button ', () => {

        AddRemovePage.addButton.click();
        AddRemovePage.listDeleteButtonsToBeClickable(AddRemovePage.listOfDeleteButtons);;
        expect(AddRemovePage.listOfDeleteButtons).toBeElementsArrayOfSize(1);

        AddRemovePage.firstDeleteButton.click();

        expect(AddRemovePage.listOfDeleteButtons).toBeElementsArrayOfSize(0);

    });
    //deleting middle element from list Delete buttons when exist 3 and more elements in this list.
    it(('deleting middle button delete'), () => {

        AddRemovePage.addDeleteButton(3);
        expect(AddRemovePage.listOfDeleteButtons).toBeElementsArrayOfSize({ gte: 3 });
        AddRemovePage.listDeleteButtonsToBeClickable(AddRemovePage.listOfDeleteButtons);

        let len = Math.ceil(((AddRemovePage.listOfDeleteButtons).length) / 2 - 1);
        AddRemovePage.listOfDeleteButtons[len].click();
        expect(AddRemovePage.listOfDeleteButtons).toBeElementsArrayOfSize(2);

    });

    //deleting first element from list Delete buttons when exist 2 and more elements in this list.
    it(('deleting first button delete'), () => {

        AddRemovePage.addDeleteButton(3);
        expect(AddRemovePage.listOfDeleteButtons).toBeElementsArrayOfSize({ gte: 2 });
        AddRemovePage.listDeleteButtonsToBeClickable(AddRemovePage.listOfDeleteButtons);

        AddRemovePage.firstDeleteButton.click();
        expect(AddRemovePage.listOfDeleteButtons).toBeElementsArrayOfSize(2);


    });
    //deleting last element from list Delete buttons when exist 3 and more elements in this list.
    it(('deleting last button delete'), () => {

        AddRemovePage.addDeleteButton(3);
        expect(AddRemovePage.listOfDeleteButtons).toBeElementsArrayOfSize({ gte: 2 });
        AddRemovePage.listDeleteButtonsToBeClickable(AddRemovePage.listOfDeleteButtons);

        AddRemovePage.lastDeleteButton.click();
        expect(AddRemovePage.listOfDeleteButtons).toBeElementsArrayOfSize(2);

    });
    
    //check that the specified number of Delete buttons has been added, 
    //and after deleting all these buttons, the system returns to its original state
    it(('deleting Delete button'), () => {
        AddRemovePage.addDeleteButton(5);
        expect(AddRemovePage.listOfDeleteButtons).toBeElementsArrayOfSize(5);
        AddRemovePage.listDeleteButtonsToBeClickable(AddRemovePage.listOfDeleteButtons);
        
    });


});