import LoginPage from "./loginPage";

class HomePage extends LoginPage {
  menus = [
    "Home",
    "Settings",
    "Actionable Tickets",
    "All Tickets",
    "Daily Plan",
    "Time Management",
    "Reports",
    "Chat",
    "Leaves",
    "Support",
    "Pull Requests",
    "Instances",
  ];
  homePage = Cypress.env("homePage");
  instanceLocator = this.homePage.instanceLocator;
  groupedByLocator = this.homePage.groupedByLocator;
  groupedByDropdownLocator = this.homePage.groupedByDropdownLocator;

  validateMenus() {
    for (let i = 0; i < this.menus.length; i++) {
      cy.contains(this.menus[i]).should("be.visible");
    }
  }

  validateInstancesNotEmpty() {
    // Check that there are items under the instances
    cy.get(this.instanceLocator)
      .find("div")
      .should("have.length.greaterThan", 0);
  }
  validateGroupBy() {
    cy.get(this.groupedByLocator).contains("Grouped By").should("be.visible");
    cy.get(this.groupedByDropdownLocator).click();
    cy.contains("PR Status").should("be.visible");
    cy.contains("PR Owner").should("be.visible");
    cy.contains("Team").should("be.visible");
    cy.contains("Instance").should("be.visible");
  }
}

export default HomePage;
