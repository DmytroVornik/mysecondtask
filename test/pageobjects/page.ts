export default abstract class Page {

    get footer() { return $('#page-footer') };
    get footerLink() { return $('#page-footer a') };

    open() {
        browser.url(this.getPath());
        return this;
    }

    abstract getPath(): string;
}
