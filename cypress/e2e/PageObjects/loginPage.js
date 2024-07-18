class LoginPage {

  loginButton = '.border-black';
  passwordField = 'input[placeholder="password"]';
  usernameField = 'input[placeholder="name@example.com"]';
  codeAsService=".text-2xl"
  message = ".max-w-96"
  loginMessage=".mx-4"
  errorMessage=".mt-4"
  homeLabel=".text-xl"
  logo=".px-8"
  groupedBy=".gap-4"

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
    cy.get(this.codeAsService).contains("Code as a Service").should("be.visible");
    cy.get(this.message)
      .contains(
        "We turn your backlog into high-quality production code while growing the next generation of developers."
      )
      .should("be.visible");
    cy.get(this.loginMessage)
      .contains("Log in to your GitStart account")
      .should("be.visible");
  }
  clickLoginButton() {
    cy.get(this.loginButton).click();
  }

  enterUsername(username) {
    cy.get(this.usernameField)
      .type(username)
      .should("have.value", username);
  }

  enterPassword(password) {
    cy.get(this.passwordField)
      .type(password)
      .should("have.value", password);
  }

  checkErrorMessage(message) {
    cy.get(this.errorMessage).contains(message).should("be.visible");
  }

  checkDashboard() {
    cy.get(this.homeLabel).contains("Your team's work").should("be.visible");
    cy.get(this.logo).should("be.visible");
    cy.get(this.groupedBy).contains("Grouped By").should("be.visible");
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
