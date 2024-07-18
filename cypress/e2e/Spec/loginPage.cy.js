import LoginPage from '../PageObjects/loginPage';


describe('Login page', () => {
  const loginPage = new LoginPage();
  
  let validEmail=loginPage.validEmail
  let  validPassword=loginPage.validPassword
  let  wrongPassword=loginPage.wrongPassword
  let wrongEmail=loginPage.wrongEmail

  beforeEach(() => {
    loginPage.visit(Cypress.env("baseUrl"));
    loginPage.loginscreenValidation();
  });

  it('valid username and valid password', () => {
    loginPage.clickLoginButton();
    loginPage.enterUsername(validEmail);
    loginPage.enterPassword(validPassword);
    loginPage.clickLoginButton();
    loginPage.wait(5000);
    loginPage.checkDashboard();
  });

  it('valid username and invalid password', () => {
    loginPage.clickLoginButton();
    loginPage.enterUsername(validEmail);
    loginPage.enterPassword(wrongPassword);
    loginPage.clickLoginButton();
    loginPage.checkErrorMessage('Invalid email or password.');
  });

  it('invalid username and valid password', () => {
    loginPage.clickLoginButton();
    loginPage.enterUsername(wrongEmail);
    loginPage.enterPassword(validPassword);
    loginPage.clickLoginButton();
    loginPage.checkErrorMessage('Invalid email or password.');
  });

  it('invalid username and invalid password', () => {
    loginPage.clickLoginButton();
    loginPage.enterUsername(wrongEmail);
    loginPage.enterPassword(wrongPassword);
    loginPage.clickLoginButton();
    loginPage.checkErrorMessage('Invalid email or password.');
  });
});