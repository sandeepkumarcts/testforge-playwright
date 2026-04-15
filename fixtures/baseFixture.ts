import { test as base, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ApiClient } from '../utils/apiClient';

type MyFixtures = {
  loginPage: LoginPage;
  apiClient: ApiClient;
};

export const test = base.extend<MyFixtures>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },

 apiClient: async ({}, use) => {
    await use(new ApiClient());
  }
});

export { expect };
