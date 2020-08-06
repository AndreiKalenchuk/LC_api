const Page = require('./page');

class LoginPage extends Page {

    get inputEmail () { return $('#normal_login_email') }
    get inputPassword () { return $('#normal_login_password') }
    get btnLogIn () { return $('button[type="submit"]') }

    login (username, password) {
        this.inputEmail.setValue(username);
        this.inputPassword.setValue(password);
        this.btnLogIn.click();
    }

    /**
     * overwrite specifc options to adapt it to page object
     */
    open (path) {
        return super.open('/user/login');
    }
}

module.exports = new LoginPage();
