import Page, { step } from "./page"
import AllureReporter from "@wdio/allure-reporter";


class LoginPage extends Page {
    get loginName() { return $('#tfLoginname') }
    get password() { return $('#tfPassword') }
    get buttonSubmit() { return $('#btnSubmitLogin') }

    getPath() {
        return 'login';
    }
    @step()
    setLoginAndPassword(login = "qq", password = "123") {
        AllureReporter.addStep('Enter login');
        this.loginName.waitForClickable();
        browser.takeScreenshot();
        this.loginName.setValue(login);
        browser.takeScreenshot();
        AllureReporter.addStep('Enter password')
        this.password.waitForClickable();
        browser.takeScreenshot();
        this.password.setValue(password);
        browser.takeScreenshot();
    }
    @step('Click submit button')
    submit() {
        this.buttonSubmit.click();
    }
}
export default new LoginPage()