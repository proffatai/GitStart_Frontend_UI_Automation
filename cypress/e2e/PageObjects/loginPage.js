class LoginPage {

  // loginButtonLocator = '.border-black';
  loginButtonLocator=Cypress.env("loginButtonLocator")
  passwordLocator= 'input[placeholder="password"]';
  usernameLocator= 'input[placeholder="name@example.com"]';
  codeAsServiceLocator=".text-2xl"
  messageLocator = ".max-w-96"
  loginMessageLocator=".mx-4"
  errorMessageLocator=".mt-4"
  homeLabelLocator=".text-xl"
  logoLocator=".px-8"
  groupedByLocator=".gap-4"

  constructor() {
    this.validEmail = Cypress.env("validEmail");
    this.validPassword = Cypress.env("validPassword");
    this.wrongPassword= Cypress.env("wrongPassword");
    this.wrongEmail= Cypress.env("wrongEmail");
  }
  
  visit() {
    cy.visit(Cypress.env("baseUrl"));
  }

  loginscreenValidation() {
    cy.get(this.codeAsServiceLocator).contains("Code as a Service").should("be.visible");
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
  }

  enterUsername(username) {
    cy.get(this.usernameLocator)
      .type(username)
      .should("have.value", username);
  }

  enterPassword(password) {
    cy.get(this.passwordLocator)
      .type(password)
      .should("have.value", password);
  }

  checkErrorMessage(message) {
    cy.get(this.errorMessageLocator).contains(message).should("be.visible");
  }

  checkDashboard() {
    cy.get(this.homeLabelLocator).contains("Your team's work").should("be.visible");
    cy.get(this.logoLocator).should("be.visible");
    cy.get(this.groupedByLocator).contains("Grouped By").should("be.visible");
  }

  wait(ms) {
    cy.wait(ms);
  }

  login(username, password) {
    this.clickLoginButton();
    this.enterUsername(username);
    this.enterPassword(password);
    this.clickLoginButton();
    this.wait(5000);
  }
}

export default LoginPage;
