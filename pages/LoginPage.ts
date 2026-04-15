import { BasePage } from './BasePage';

export class LoginPage extends BasePage {
    private usernameInput = '#username';
    private passwordInput = '#password';
    private loginButton = 'button[type="submit"]';


    async open() {
      await this.page.goto('https://the-internet.herokuapp.com/login');
    }

    async login(username: string, password: string): Promise<void> {

        await this.fill(this.usernameInput, username);
        await this.fill(this.passwordInput, password);
        await this.click(this.loginButton);
    }

    get errorMessage() {
      return this.page.locator('#flash');
  }
}











