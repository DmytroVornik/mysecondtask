import Page, { step } from "./page"
import AllureReporter from "@wdio/allure-reporter";

const log = 'qq';
const pas = '123';
class LoginPage extends Page {
    get loginName() { return $('#tfLoginname') }
    get password() { return $('#tfPassword') }
    get buttonSubmit() { return $('#btnSubmitLogin') }

    getPath() {
        return 'login';
    }
    @step()
    setLoginAndPassword() {

        AllureReporter.addStep('Enter login');
        this.loginName.waitForClickable();
        browser.takeScreenshot();
        this.loginName.setValue(log);
        browser.takeScreenshot();
        AllureReporter.addStep('Enter password')
        this.password.waitForClickable();
        browser.takeScreenshot();
        this.password.setValue(pas);
        browser.takeScreenshot();
    }
    @step('Click submit button')
    submit() {
        this.buttonSubmit.click();
    }
}
export default new LoginPage()