import Page from "./page"

class LoginPage extends Page {
    getPath() {
        return 'login';
    }
    get loginName() { return $('#tfLoginname') }
    get password() { return $('#tfPassword') }
    get buttonSubmit() { return $('#btnSubmitLogin') }

    login(login = 'qq', password = '123') {
        this.loginName.setValue(login);
        this.password.setValue(password);
        this.buttonSubmit.click();
    }
}   
export default new LoginPage()