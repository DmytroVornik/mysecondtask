describe('webdriver.io page', () => {
    it('added 10 button delete', () => {
        browser.url(`https://the-internet.herokuapp.com/add_remove_elements/`);
        $('button').click();     })
        expect($('.added-manually')).toBeExisting;
})