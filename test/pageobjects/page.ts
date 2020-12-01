export default abstract class Page {

  open() {
    browser.url(this.getPath());
    return this;
  }

  abstract getPath(): string;

}