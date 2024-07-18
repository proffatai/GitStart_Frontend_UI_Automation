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
      
      loginButtonLocator:locatorData.loginButtonLocator
    },
    watchForFileChanges: false,
  },
});
