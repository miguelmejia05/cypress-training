class LoginPage {

    private loginPageURL: string;
    private usernameInput: string;
    private passwordInput: string;
    private loginButton: string;

    constructor() {
        this.loginPageURL = "https://www.saucedemo.com/";
        this.usernameInput = "input#user-name";
        this.passwordInput = "input#password";
        this.loginButton = "input#login-button";
    }

    public visitLoginPage(): void {
        cy.visit(this.loginPageURL);
    }

    public logIn(): void {
        cy.get(this.usernameInput).type('standard_user');
        cy.get(this.passwordInput).type('secret_sauce');
        cy.get(this.loginButton).click();
    }

}

export { LoginPage }