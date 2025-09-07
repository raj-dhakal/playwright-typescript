import { Page } from '@playwright/test';

export class LoginPage {
  private userEmail: any;     
  private userPassword: any;
  private userLogin: any;

  constructor(page: Page) {
    this.userEmail = page.locator('#userEmail');
    this.userPassword = page.locator('#userPassword');
    this.userLogin = page.locator('#login');
  }
  async login(username: string, password: string) {
    await this.userEmail.fill(username);
    await this.userPassword.fill(password);
    await this.userLogin.click();
  }
}
