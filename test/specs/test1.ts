
describe('adding and removing', () => {
    const addButton = 'button*=Add Element';
    const deleteButton = '.added-manually';
    beforeAll(() => {
        browser.url(`https://the-internet.herokuapp.com/add_remove_elements/`);
    });

    beforeEach(() => {
        expect($(addButton)).toBeClickable();
    });

    it('adding first button delete', () => {
        
        $(addButton).click();
        expect($$(deleteButton)).toBeElementsArrayOfSize(1);

    });

    it('adding second button delete', () => {

        $(addButton).click();

        expect($$(deleteButton)).toBeElementsArrayOfSize(2);

    });


    it('adding third button delete', () => {

        $(addButton).click();

        expect($$(deleteButton)).toBeElementsArrayOfSize(3);

    });


    it('adding fourth and fifth button delete', () => {

        $(addButton).click();
        $(addButton).click();

        expect($$(deleteButton)).toBeElementsArrayOfSize(5);

    });

    it(('deleting middle button delete'), () => {

        $$(deleteButton)[2].click();

        expect($$(deleteButton)).toBeElementsArrayOfSize(4);

    });


    it(('deleting first button delete'), () => {

        $$(deleteButton)[0].click();

        expect($$(deleteButton)).toBeElementsArrayOfSize(3);

    });

    it(('deleting last button delete'), () => {

        $$(deleteButton)[2].click();

        expect($$(deleteButton)).toBeElementsArrayOfSize(2);

    });

    it(('deleting all buttons delete'), () => {

        $$(deleteButton)[1].click();
        $$(deleteButton)[0].click();

        expect($$(deleteButton)).toBeElementsArrayOfSize(0);

    });


});
