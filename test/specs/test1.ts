describe('webdriver.io page', () => {
    it('added 10 button delete', () => {
        browser.url(`https://the-internet.herokuapp.com/add_remove_elements/`);
        for(let i = 0;i < 10;i++)
        $('button').click();     })
        expect($('#elements'[9])).toBeExisting();
})