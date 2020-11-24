export default abstract class Page {
    get footer() {return $('#page-footer') };

    open () {
        browser.url(this.getPath());
        return this;
    }
    abstract getPath(): string;
}
