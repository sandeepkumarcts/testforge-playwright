import { request } from '@playwright/test';

export class ApiClient {
  async getUsers() {
    const apiContext = await request.newContext();
    const response = await apiContext.get('https://reqres.in/api/users');
    return response.json();
  }
}