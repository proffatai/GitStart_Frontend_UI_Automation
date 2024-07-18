import SettingPage from '../PageObjects/settingsPage';


describe('Settings page', () => {
  const settingsPage=new SettingPage();
  let validEmail=settingsPage.validEmail
  let  validPassword=settingsPage.validPassword
  let  wrongPassword=settingsPage.wrongPassword

  beforeEach(() => {
    settingsPage.visit();
    settingsPage.login(validEmail,validPassword);
    settingsPage.navigateToSettings();
  });

  it('Validate settings page', () => {
    settingsPage.validateSettingsPage()
  });
 
  it('Change password: Valid current password, valid new password, valid confirm password', () => {
    settingsPage.enterCurrentPassword(validPassword)
    settingsPage.enterNewPassword(validPassword)
    settingsPage.enterConfirmPassword(validPassword)
    settingsPage.clickSaveButton()
  });

  it('Change password: Valid current password, valid new password, different confirm password', () => {
    settingsPage.enterCurrentPassword(validPassword)
    settingsPage.enterNewPassword(validPassword)
    settingsPage.enterConfirmPassword(wrongPassword)
    settingsPage.checkErrorMessage("Passwords do not match") 
  });

  it('Change password: invalid current password, valid new password, valid confirm password', () => {
    settingsPage.enterCurrentPassword(wrongPassword)
    settingsPage.enterNewPassword(wrongPassword)
    settingsPage.enterConfirmPassword(wrongPassword)
    settingsPage.clickSaveButton()
    settingsPage.checkErrorMessage("error authenticating user. Invalid credentials") 
  });
});