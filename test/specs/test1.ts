describe('adding and removing', () => {
    beforeAll(() => {
        browser.url(`https://the-internet.herokuapp.com/add_remove_elements/`);
        
    });

    beforeEach(() => {
        //expect($('.button')).toBeExisting();
        expect($('button*=Add Element')).toBeExisting();
        expect($('button*=Add Element')).toBeClickable();

    });

    it('adding first button delete', () => {
        $('button').click();
        expect($$('.added-manually')[0].isExisting);

    });

    it('adding second button delete', () => {
        expect($$('.added-manually')[0].isExisting);

        $('button').click();

        expect($$('.added-manually')[1].isExisting);
        expect($$('.added-manually').length).toEqual(2);
    });


    it('adding third button delete', () => {
        expect($$('.added-manually').length).toEqual(2);

        $('button').click();


        expect($$('.added-manually')[2].isExisting);
        expect($$('.added-manually').length).toEqual(3);
    });


    it('adding fourth and fifth button delete', () => {
        expect($$('.added-manually').length).toEqual(3);

        $('button').click();
        $('button').click();

        expect($$('.added-manually').length).toEqual(5);

    });

    it(('deleting middle button delete'), () => {
        expect($$('.added-manually')[2].isExisting);
        expect($$('.added-manually').length).toEqual(5);

        $$('.added-manually')[2].click();

        expect($$('.added-manually').length).toEqual(4);

    });


    it(('deleting first button delete'), () => {
        expect($$('.added-manually')[0].isExisting);
        expect($$('.added-manually').length).toEqual(4);

        $$('.added-manually')[0].click();

        expect($$('.added-manually').length).toEqual(3);

    });

    it(('deleting last button delete'), () => {
        expect($$('.added-manually')[2].isExisting);
        expect($$('.added-manually').length).toEqual(3);

        $$('.added-manually')[2].click();

        expect($$('.added-manually').length).toEqual(2);

    });

    it(('deleting all buttons delete'), () => {
        expect($$('.added-manually').length).toEqual(2);

        $$('.added-manually')[0].click();
        $$('.added-manually')[0].click();

        expect($$('.added-manually').length).toEqual(0);

    });


});