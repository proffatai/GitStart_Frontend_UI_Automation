import HomePage from '../PageObjects/homePage';

describe('Login page', () => {
  const homePage=new HomePage();
  let validEmail=homePage.validEmail
  let  validPassword=homePage.validPassword

  beforeEach(() => {
    homePage.visit();
    homePage.loginscreenValidation();
    homePage.login(validEmail,validPassword);
  });

  it('Validate homepage', () => {
    homePage.checkDashboard();
    homePage.validateMenus()
    homePage.validateInstancesNotEmpty()
    homePage.validateGroupBy()
  });
 
});