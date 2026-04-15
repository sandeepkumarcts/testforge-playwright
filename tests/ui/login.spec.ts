import { test, expect } from '../../fixtures/baseFixture';
import { testData } from '../../utils/testData';

test.describe('Login Tests', () => {

  test('valid login @smoke', async ({ loginPage }) => {
    await loginPage.open();
    await loginPage.login(testData.validUser, testData.validPass);
    await expect(loginPage.errorMessage).toBeVisible();
  });

  test('invalid login @regression', async ({ loginPage }) => {
    await loginPage.open();
    await loginPage.login(testData.invalidUser, testData.invalidPass);
    await expect(loginPage.errorMessage).toBeVisible();
  });

  

});

test('API + UI test @apitest', async ({ loginPage, apiClient }) => {

  const users = await apiClient.getUsers();
  console.log(users);

  await loginPage.open();
  await loginPage.login('tomsmith', 'SuperSecretPassword!');

});