import AddRemovePage from '../pageobjects/addRemove.page'

describe('adding and removing', () => {
    //initial state for each test
    beforeEach(() => {
        AddRemovePage.open();

    });
    it('existence of footer ', () => {
        expect(AddRemovePage.footer).toHaveTextContaining('Powered by');
    });
    
    //zero state - press delete
    it('zero state - press Delete button ', () => {
        expect(AddRemovePage.addButton).toBeClickable();
        expect(AddRemovePage.listOfDeleteButtons).toBeElementsArrayOfSize(0);

    });

    //zero state - press add
    it('zero state - press Add button ', () => {
        expect(AddRemovePage.addButton).toBeClickable();
        expect(AddRemovePage.listOfDeleteButtons).toBeElementsArrayOfSize(0);

        AddRemovePage.clickAddButton(1);
        expect(AddRemovePage.listOfDeleteButtons).toBeElementsArrayOfSize(1);
        expect(AddRemovePage.addButton).toBeClickable();


    });

    //first state - press add
    it('first state - press Add button ', () => {
        expect(AddRemovePage.addButton).toBeClickable();
        AddRemovePage.clickAddButton(1);
        verifyThatDeleteButtonAreClickable(AddRemovePage.listOfDeleteButtons);
        expect(AddRemovePage.listOfDeleteButtons).toBeElementsArrayOfSize(1);

        AddRemovePage.clickAddButton(1);
        expect(AddRemovePage.listOfDeleteButtons).toBeElementsArrayOfSize(2);
        verifyThatDeleteButtonAreClickable(AddRemovePage.listOfDeleteButtons);
        expect(AddRemovePage.addButton).toBeClickable();

    });

    //first state - press delete
    it('first state - press Delete button ', () => {

        expect(AddRemovePage.addButton).toBeClickable();
        AddRemovePage.clickAddButton(1);
        verifyThatDeleteButtonAreClickable(AddRemovePage.listOfDeleteButtons);
        expect(AddRemovePage.listOfDeleteButtons).toBeElementsArrayOfSize(1);

        AddRemovePage.clickFirstDeleteButton();
        expect(AddRemovePage.listOfDeleteButtons).toBeElementsArrayOfSize(0);
        expect(AddRemovePage.addButton).toBeClickable();
    });

    //second state - press add
    it('second state - press Add button ', () => {
        expect(AddRemovePage.addButton).toBeClickable();
        AddRemovePage.clickAddButton(2);
        verifyThatDeleteButtonAreClickable(AddRemovePage.listOfDeleteButtons);
        expect(AddRemovePage.listOfDeleteButtons).toBeElementsArrayOfSize(2);

        AddRemovePage.clickAddButton(1);
        expect(AddRemovePage.listOfDeleteButtons).toBeElementsArrayOfSize(3);
        verifyThatDeleteButtonAreClickable(AddRemovePage.listOfDeleteButtons);
        expect(AddRemovePage.addButton).toBeClickable();


    });

    //second state - press delete
    it('second state - press Delete button ', () => {

        expect(AddRemovePage.addButton).toBeClickable();
        AddRemovePage.clickAddButton(2);
        verifyThatDeleteButtonAreClickable(AddRemovePage.listOfDeleteButtons);
        expect(AddRemovePage.listOfDeleteButtons).toBeElementsArrayOfSize(2);

        AddRemovePage.clickFirstDeleteButton();
        expect(AddRemovePage.listOfDeleteButtons).toBeElementsArrayOfSize(1);
        verifyThatDeleteButtonAreClickable(AddRemovePage.listOfDeleteButtons);
        expect(AddRemovePage.addButton).toBeClickable();

    });

    describe('deleting first, middle and last elements', () => {

        //deleting middle element from list Delete buttons when exist 3 and more elements in this list.
        it(('deleting middle button delete'), () => {
            expect(AddRemovePage.addButton).toBeClickable();
            AddRemovePage.clickAddButton(3);
            expect(AddRemovePage.listOfDeleteButtons).toBeElementsArrayOfSize(3);
            verifyThatDeleteButtonAreClickable(AddRemovePage.listOfDeleteButtons);

            AddRemovePage.clickMiddleDeleteButton();

            expect(AddRemovePage.listOfDeleteButtons).toBeElementsArrayOfSize(2);
            expect(AddRemovePage.addButton).toBeClickable();
            verifyThatDeleteButtonAreClickable(AddRemovePage.listOfDeleteButtons);

        });

        //deleting first element from list Delete buttons when exist 2 and more elements in this list.
        it(('deleting first button delete'), () => {
            expect(AddRemovePage.addButton).toBeClickable();
            AddRemovePage.clickAddButton(3);
            expect(AddRemovePage.listOfDeleteButtons).toBeElementsArrayOfSize(3);
            verifyThatDeleteButtonAreClickable(AddRemovePage.listOfDeleteButtons);

            AddRemovePage.clickFirstDeleteButton();
            expect(AddRemovePage.listOfDeleteButtons).toBeElementsArrayOfSize(2);
            expect(AddRemovePage.addButton).toBeClickable();
            verifyThatDeleteButtonAreClickable(AddRemovePage.listOfDeleteButtons);


        });
        //deleting last element from list Delete buttons when exist 3 and more elements in this list.
        it(('deleting last button delete'), () => {
            expect(AddRemovePage.addButton).toBeClickable();
            AddRemovePage.clickAddButton(3);
            expect(AddRemovePage.listOfDeleteButtons).toBeElementsArrayOfSize(3);
            verifyThatDeleteButtonAreClickable(AddRemovePage.listOfDeleteButtons);

            AddRemovePage.clickLastDeleteButton();
            expect(AddRemovePage.listOfDeleteButtons).toBeElementsArrayOfSize(2);
            expect(AddRemovePage.addButton).toBeClickable();
            verifyThatDeleteButtonAreClickable(AddRemovePage.listOfDeleteButtons);
        });

    });


});

function verifyThatDeleteButtonAreClickable(listOfDeleteButtons) {
    for (let i = 0; i < listOfDeleteButtons.length; i++) {
        expect(listOfDeleteButtons[i]).toBeClickable();
    }
}