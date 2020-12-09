class BaseCard {
    protected get root(){ return $(this.selector)} 
    get author() { return this.root.$('[id*=Author]') }
    get title() { return this.root.$('[id*=Title]') }
    get price() { return this.root.$('[id*=Price]') }
    constructor(private selector: string){}

    getTitle() {
        return this.title.getText();
    }
    getAuthor() {
        return this.author.getText();
    }
    getPrice() {
        return this.price.getText();
    }
}
export default BaseCard


