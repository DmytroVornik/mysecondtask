import BaseCard from "./baseCard.page";

abstract class AbstractCardPage extends BaseCard {
    get rating() { return this.root.$$('[src="/images/star-active.svg"]') }
    get description() { return this.root.$('[id*=Description]') }
    get tags() { return this.root.$('[id*=Tags]') }

    getRating() {
        return this.rating.length;
    }
    getDescription() {
        return this.description.getText();
    }
    getTags() {
        return this.tags.getText();
    }
    abstract pressButton()
}
export default AbstractCardPage