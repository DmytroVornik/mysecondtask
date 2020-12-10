import BaseCard from "./baseCard.page";

class CardPage extends BaseCard {
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
}
export default CardPage