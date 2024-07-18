import LoginPage from "./loginPage";

class SettingPage extends LoginPage {
  settingsPage=Cypress.env("settingsPage");
  currentPasswordLocator = this.settingsPage.currentPasswordLocator;
  newPasswordLocator = this.settingsPage.newPasswordLocator;
  confirmPasswordLocator = this.settingsPage.confirmPasswordLocator;
  saveButtonLocator = this.settingsPage.saveButtonLocator;

  navigateToSettings() {
    cy.contains("Settings").click();
  }

  validateSettingsPage() {
    cy.contains("Authentication").should("be.visible");
    cy.contains("Change current password").should("be.visible");
    cy.contains("Current password").should("be.visible");
    cy.contains("New password").should("be.visible");
    cy.contains("Confirm password").should("be.visible");
    cy.get(".text-md").should("be.disabled");
  }
  
  enterCurrentPassword(currentPassword){
    cy.get(this.currentPasswordLocator).type(currentPassword);
  }

  enterNewPassword(newPassword){
    cy.get(this.newPasswordLocator).type(newPassword);
  }

  enterConfirmPassword(confirmPassword){
    cy.get(this.confirmPasswordLocator).type(confirmPassword);
  }

  clickSaveButton() {
    cy.get(this.saveButtonLocator).should("be.enabled").click();
  }

  checkErrorMessage(message) {
    cy.contains(message).should("be.visible");
  }
}
export default SettingPage;
