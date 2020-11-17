import AddRemovePage from '../pageobjects/addRemove.page'

describe('adding and removing', () => {
    //initial state for each test
    beforeEach(() => {
        AddRemovePage.open();

    });

    //zero state - press delete
    it('zero state - press Delete button ', () => {
        expect(AddRemovePage.addButton).toBeClickable();
        AddRemovePage.listButtonsNotToBeClickable(AddRemovePage.listOfDeleteButtons);

    });

    //zero state - press add
    it('zero state - press Add button ', () => {
        expect(AddRemovePage.addButton).toBeClickable();
        AddRemovePage.listButtonsToBeClickable;

        AddRemovePage.addButton.click();
        expect(AddRemovePage.listOfDeleteButtons).toBeElementsArrayOfSize(1);


    });

    //first state - press add
    it('first state - press Add button ', () => {
        expect(AddRemovePage.addButton).toBeClickable();
        AddRemovePage.addButton.click();

        AddRemovePage.listButtonsToBeClickable(AddRemovePage.listOfDeleteButtons);
        expect(AddRemovePage.listOfDeleteButtons).toBeElementsArrayOfSize(1);

        AddRemovePage.addButton.click();
        expect(AddRemovePage.listOfDeleteButtons).toBeElementsArrayOfSize(2);
    });

    //first state - press delete
    it('first state - press Delete button ', () => {

        AddRemovePage.addButton.click();
        AddRemovePage.listButtonsToBeClickable(AddRemovePage.listOfDeleteButtons);;
        expect(AddRemovePage.listOfDeleteButtons).toBeElementsArrayOfSize(1);

        AddRemovePage.firstDeleteButton.click();

        expect(AddRemovePage.listOfDeleteButtons).toBeElementsArrayOfSize(0);

    });
    //deleting middle Delete button 
    it(('deleting middle button delete'), () => {

        AddRemovePage.addDeleteButton(3);
        expect(AddRemovePage.listOfDeleteButtons).toBeElementsArrayOfSize({ gte: 3 });
        AddRemovePage.listButtonsToBeClickable(AddRemovePage.listOfDeleteButtons);

        let len = Math.ceil(((AddRemovePage.listOfDeleteButtons).length) / 2 - 1);
        AddRemovePage.listOfDeleteButtons[len].click();
        expect(AddRemovePage.listOfDeleteButtons).toBeElementsArrayOfSize(2);

    });

    //deleting first Delete button 
    it(('deleting first button delete'), () => {

        AddRemovePage.addDeleteButton(3);
        expect(AddRemovePage.listOfDeleteButtons).toBeElementsArrayOfSize({ gte: 2 });
        AddRemovePage.listButtonsToBeClickable(AddRemovePage.listOfDeleteButtons);

        AddRemovePage.firstDeleteButton.click();
        expect(AddRemovePage.listOfDeleteButtons).toBeElementsArrayOfSize(2);


    });

    //deleting last Delete button
    it(('deleting last button delete'), () => {

        AddRemovePage.addDeleteButton(3);
        expect(AddRemovePage.listOfDeleteButtons).toBeElementsArrayOfSize({ gte: 2 });
        AddRemovePage.listButtonsToBeClickable(AddRemovePage.listOfDeleteButtons);

        AddRemovePage.lastDeleteButton.click();
        expect(AddRemovePage.listOfDeleteButtons).toBeElementsArrayOfSize(2);

    });



});