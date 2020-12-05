import Page, { step } from "./page"
import MainPage from '../pageobjects/main.page';
import AllureReporter from "@wdio/allure-reporter";


class LoginPage extends Page {
    getPath() {
        return 'login';
    }
    get loginName() { return $('#tfLoginname') }
    get password() { return $('#tfPassword') }
    get buttonSubmit() { return $('#btnSubmitLogin') }
    @step()
    setLoginAndPassword(login = "qq", password = "123") {
        AllureReporter.addStep('Enter login');
        this.loginName.setValue(login);
        browser.takeScreenshot();
        AllureReporter.addStep('Enter password')
        this.password.setValue(password);
        browser.takeScreenshot();
    }
    @step('Click submit button')
    submit(){
        this.buttonSubmit.click();
    }
}
export default new LoginPage()