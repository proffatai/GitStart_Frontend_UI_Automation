const { group } = require("console");
const { defineConfig } = require("cypress");
const fs = require('fs');
const path = require('path');

// Function to load the config file
function loadConfigFile(file) {
  const filePath = path.resolve('/Users/proffatai/Documents/GitStart/GitStart_Frontend_UI_Automation/cypress/config', file);
  return JSON.parse(fs.readFileSync(filePath, 'utf-8'));
}

// Function to load the locators file
function loadLocatorsfile(file) {
  const filePath = path.resolve('/Users/proffatai/Documents/GitStart/GitStart_Frontend_UI_Automation/cypress/locators', file);
  return JSON.parse(fs.readFileSync(filePath, 'utf-8'));
}

// Get the config file from the environment variable
const configFile = process.env.CYPRESS_CONFIG_FILE || 'dev.json';
const configData = loadConfigFile(configFile);
const locatorData = loadLocatorsfile(configFile);

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    
    env: {
      baseUrl: configData.baseUrl,
      validEmail: configData.validEmail,
      wrongEmail: configData.wrongEmail,
      validPassword: configData.validPassword,
      wrongPassword: configData.wrongPassword,
      
      loginPage:{
        loginButtonLocator:locatorData.loginButtonLocator,
        passwordLocator:locatorData.passwordLocator,
        usernameLocator:locatorData.usernameLocator,
        codeAsServiceLocator:locatorData.codeAsServiceLocator,
        messageLocator:locatorData.messageLocator,
        loginMessageLocator:locatorData.loginMessageLocator,
        errorMessageLocator:locatorData.errorMessageLocator,
        homeLabelLocator:locatorData.homeLabelLocator,
        logoLocator:locatorData.logoLocator,
        groupedByLocator:locatorData.groupedByLocator
      },
      homePage:{
        instanceLocator:locatorData.instanceLocator,
        groupedByLocator:locatorData.groupedByLocator,
        groupedByDropdownLocator:locatorData.groupedByDropdownLocator
      },
      settingsPage:{
        currentPasswordLocator:locatorData.currentPasswordLocator,
        newPasswordLocator:locatorData.newPasswordLocator,
        confirmPasswordLocator:locatorData.confirmPasswordLocator,
        saveButtonLocator:locatorData.saveButtonLocator,
      }
      
    },
    watchForFileChanges: false,
    defaultCommandTimeout: 10000,
  },
});
