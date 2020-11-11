describe('webdriver.io page', () => {
    it('added 10 button delete', () => {
        browser.url(`https://the-internet.herokuapp.com/add_remove_elements/`);
        for(let i = 0;i < 10;i++)
        $('button').click();     })
        expect($('#elements')).toBeExisting;
})



/*describe('My Login application', () => {
    it('should login with valid credentials', () => {
        browser.url(`https://the-internet.herokuapp.com/login`);

        $('#username').setValue('tomsmith');
        $('#password').setValue('SuperSecretPassword!');
        $('button[type="submit"]').click(); 

        expect($('#flash')).toBeExisting();
        expect($('#flash')).toHaveTextContaining(
            'You logged into a secure area!');
    });
});*/
