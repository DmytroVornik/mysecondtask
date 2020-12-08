import { step } from "./page";

class BaseCard {
    protected get root(){ return $(this.selector)} 
    get author() { return this.root.$('[id*=Author]') }
    get title() { return this.root.$('[id*=Title]') }
    get price() { return this.root.$('[id*=Price]') }
    get rating() { return this.root.$$('[src="/images/star-active.svg"]') }
    get description() { return this.root.$('[id*=Description]') }
    get tags() { return this.root.$('[id*=Tags]') }
    constructor(private selector: string){}

    @step()
    getTitle() {
        return this.title.getText();
    }
    @step()
    getAuthor() {
        return this.author.getText();
    }
    @step()
    getPrice() {
        return this.price.getText();
    }
    @step()
    getRating() {
        return this.rating.length;
    }
    @step()
    getDescription() {
        return this.description.getText();
    }
    @step()
    getTags() {
        return this.tags.getText();
    }
}
export default BaseCard


