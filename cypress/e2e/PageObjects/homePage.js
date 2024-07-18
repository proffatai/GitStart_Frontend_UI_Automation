import LoginPage from './loginPage';

class HomePage extends LoginPage{
  
    menus = ['Home', 'Settings', 'Actionable Tickets', 'All Tickets', 'Daily Plan', 'Time Management', 'Reports', 'Chat', 'Leaves', 'Support', 'Pull Requests', 'Instances']
    instanceLocator='.mt-8'
    groupedByLocator='.gap-4'
    groupedByDropdownLocator='button[id="headlessui-listbox-button-:r0:"]'

    validateMenus(){
      for (let i=0; i<this.menus.length; i++){
        cy.contains(this.menus[i]).should('be.visible')
      }
    }
  
    validateInstancesNotEmpty(){
    // Check that there are items under the instances
    cy.get(this.instanceLocator) 
      .find('div') 
      .should('have.length.greaterThan', 0);
    }
    validateGroupBy() {
     cy.get(this.groupedByLocator).contains('Grouped By').should('be.visible')
      cy.get(this.groupedByDropdownLocator).click()
      cy.contains('PR Status').should('be.visible')
      cy.contains('PR Owner').should('be.visible')
      cy.contains('Team').should('be.visible')
      cy.contains('Instance').should('be.visible')
    }
  
  }
  
  export default HomePage;