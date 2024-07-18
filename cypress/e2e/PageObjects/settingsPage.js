import LoginPage from "./loginPage";

class SettingPage extends LoginPage {
  currentPasswordField =
    ":nth-child(1) > .mt-2 > :nth-child(1) > .text-accented > .border-borderSecondary";
  newPasswordField =
    ":nth-child(3) > .mt-2 > :nth-child(1) > .text-accented > .border-borderSecondary";
  confirmPasswordField =
    ":nth-child(4) > .mt-2 > :nth-child(1) > .text-accented > .border-borderSecondary";
  saveButtonField = ".text-md";

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
    cy.get(this.currentPasswordField).type(currentPassword);
  }

  enterNewPassword(newPassword){
    cy.get(this.newPasswordField).type(newPassword);
  }

  enterConfirmPassword(confirmPassword){
    cy.get(this.confirmPasswordField).type(confirmPassword);
  }

  clickSaveButton() {
    cy.get(this.saveButtonField).should("be.enabled").click();
  }

  checkErrorMessage(message) {
    cy.contains(message).should("be.visible");
  }
}
export default SettingPage;
