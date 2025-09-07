import { Page } from '@playwright/test';
export class DashboardPage{
    private products : any;
    private productText : any;
    private cart : any;
    private page : Page;

    constructor(page : Page){
        this.page= page;
        this.products = page.locator(`[class= 'card-body']`);
        this.productText = page.locator(`[class= 'card-body'] b`)
        this.cart = page.locator(`[routerlink = '/dashboard/cart']`);

    }

    async searchProduct(productName:string){
        const titles = await this.productText.allTextContents();
        const count = await this.products.count();
          for(let i = 0; i < count; i++){
        if(await this.products.nth(i).textContent() === productName){
            await this.products.nth(i).locator(`text = Add To Cart`).click();
            break; 
        }
    }


    }


}