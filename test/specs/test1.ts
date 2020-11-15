
describe('adding and removing', () => {
    const addButton = 'button*=Add Element';
    const deleteButton = '.added-manually';
    beforeAll(() => {
        browser.url(`https://the-internet.herokuapp.com/add_remove_elements/`);
    });
    
    //initial state for each test
    beforeEach(() => {
        expect($(addButton)).toBeClickable();
    });

    //Check that when you click on the Add button, one Delete button is created
    it('adding first button delete', () => {
        
        $(addButton).click();
        expect($$(deleteButton)).toBeElementsArrayOfSize(1);

    });
    //Check that when you click on the Add button, a second Delete button is created. 
    //Now there are two
    it('adding second button delete', () => {

        $(addButton).click();

        expect($$(deleteButton)).toBeElementsArrayOfSize(2);

    });

    //Check that when you click on the Add button, a third Delete button is created.
    //Now there are three
    it('adding third button delete', () => {

        $(addButton).click();
        expect($$(deleteButton)).toBeElementsArrayOfSize(3);

    });

    //Check that by two clicks on the Add button, the fourth and fifth Delete buttons are created.
    // Now there are five
    it('adding fourth and fifth button delete', () => {

        $(addButton).click();
        $(addButton).click();

        expect($$(deleteButton)).toBeElementsArrayOfSize(5);

    });

    //Make sure that when you click on the Delete button, which is in the middle, 
    //the indicated button is deleted and there are four items
    it(('deleting middle button delete'), () => {

        $$(deleteButton)[2].click();

        expect($$(deleteButton)).toBeElementsArrayOfSize(4);

    });


    //Make sure that when you click on the Delete button, which is at the beginning of the list, 
    //the specified button is removed and three items remain.
    it(('deleting first button delete'), () => {

        $$(deleteButton)[0].click();

        expect($$(deleteButton)).toBeElementsArrayOfSize(3);

    });


    //Make sure that when you click on the "Delete" button at the end of the list, 
    //the specified button is removed and two items remain.
    it(('deleting last button delete'), () => {

        $$(deleteButton)[2].click();

        expect($$(deleteButton)).toBeElementsArrayOfSize(2);

    });


    //Make sure that two clicks on the Delete button remove the remaining two items
    it(('deleting all buttons delete'), () => {

        $$(deleteButton)[1].click();
        $$(deleteButton)[0].click();

        expect($$(deleteButton)).toBeElementsArrayOfSize(0);

    });


});
