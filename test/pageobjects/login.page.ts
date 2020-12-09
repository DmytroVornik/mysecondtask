import Page from "./page"
import { step } from "../utils/reports"
import AllureReporter from "@wdio/allure-reporter";


class LoginPage extends Page {
    get loginName() { return $('#tfLoginname') }
    get password() { return $('#tfPassword') }
    get buttonSubmit() { return $('#btnSubmitLogin') }

    getPath() {
        return 'login';
    }
    @step()
    setLoginAndPassword({login, password}) {
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