describe('adding and removing', () => {
    it('added 10 button delete', () => {
        browser.url(`https://the-internet.herokuapp.com/add_remove_elements/`);

        
        for(let i = 0;i < 10;i++)
        $('button').click(); 


        expect($('.added-manually').isExisting);


      });
});
