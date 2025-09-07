import { Page } from '@playwright/test';

export class LoginPage {
  private userEmail: any;     
  private userPassword: any;
  private userLogin: any;
  private page : Page;

  constructor(page: Page) {
    this.page = page;
    this.userEmail = page.locator('#userEmail');
    this.userPassword = page.locator('#userPassword');
    this.userLogin = page.locator('#login');
  }

  async goto(){
    await this.page.goto(`https://rahulshettyacademy.com/client`);
  }
  async login(username: string, password: string) {
    await this.userEmail.fill(username);
    await this.userPassword.fill(password);
    await this.userLogin.click();
  }
}
