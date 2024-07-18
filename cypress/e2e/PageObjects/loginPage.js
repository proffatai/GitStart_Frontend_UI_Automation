class LoginPage {
  loginPage = Cypress.env("loginPage");
  loginButtonLocator = this.loginPage.loginButtonLocator;
  passwordLocator = this.loginPage.passwordLocator;
  usernameLocator = this.loginPage.usernameLocator;
  codeAsServiceLocator = this.loginPage.codeAsServiceLocator;
  messageLocator = this.loginPage.messageLocator;
  loginMessageLocator = this.loginPage.loginMessageLocator;
  errorMessageLocator = this.loginPage.errorMessageLocator;
  homeLabelLocator = this.loginPage.homeLabelLocator;
  logoLocator = this.loginPage.logoLocator;
  groupedByLocator = this.loginPage.groupedByLocator;

  validEmail = Cypress.env("validEmail");
  validPassword = Cypress.env("validPassword");
  wrongPassword = Cypress.env("wrongPassword");
  wrongEmail = Cypress.env("wrongEmail");

  visit() {
    cy.visit(Cypress.env("baseUrl"));
  }

  loginscreenValidation() {
    cy.get(this.codeAsServiceLocator)
      .contains("Code as a Service")
      .should("be.visible");
    cy.get(this.messageLocator)
      .contains(
        "We turn your backlog into high-quality production code while growing the next generation of developers."
      )
      .should("be.visible");
    cy.get(this.loginMessageLocator)
      .contains("Log in to your GitStart account")
      .should("be.visible");
  }
  clickLoginButton() {
    cy.get(this.loginButtonLocator).click();
    cy.wait(10000)
  }

  enterUsername(username) {
    cy.get(this.usernameLocator).type(username).should("have.value", username);
  }

  enterPassword(password) {
    cy.get(this.passwordLocator).type(password).should("have.value", password);
  }

  checkErrorMessage(message) {
    cy.get(this.errorMessageLocator).contains(message).should("be.visible");
  }

  checkDashboard() {
    cy.get(this.homeLabelLocator)
      .contains("Your team's work")
      .should("be.visible");
    cy.get(this.logoLocator).should("be.visible");
    cy.get(this.groupedByLocator).contains("Grouped By").should("be.visible");
  }


  login(username, password) {
    this.clickLoginButton();
    this.enterUsername(username);
    this.enterPassword(password);
    this.clickLoginButton();
  }
}

export default LoginPage;
