import { Page } from '@playwright/test';

export class BasePage {
  constructor(protected page: Page) {}

    async goto(path: string = ''): Promise<void> {
        await this.page.goto(path);
    }
    async getTitle(): Promise<string> {
        return this.page.title();
    }
    async getUrl(): Promise<string> {
        return this.page.url();
    }
    async click(selector: string): Promise<void> {
        await this.page.click(selector);
    }
    async fill(selector: string, value: string): Promise<void> {
        await this.page.fill(selector, value);
    }
    async getText(locator: string) {
        return await this.page.locator(locator).textContent();
    }

    async isVisible(selector: string): Promise<boolean> {   
        return this.page.isVisible(selector);
    }
    async waitForSelector(selector: string): Promise<void> {
        await this.page.waitForSelector(selector);
    }

    async waitForNavigation(): Promise<void> {
        await this.page.waitForNavigation();
    }

    async getAttribute(selector: string, attribute: string): Promise<string | null> {
        return this.page.getAttribute(selector, attribute);
    }

    async getLocator(selector: string) {
        return this.page.locator(selector);
    }

    async getAllText(selector: string): Promise<string[]> {
        const elements = await this.page.locator(selector).elementHandles();
        const texts = [];
        for (const element of elements) {
            const text = await element.textContent();
            if (text) {
                texts.push(text.trim());
            }
        }
        return texts;
    }
    async isElementVisible(selector: string): Promise<boolean> {
        try {
            await this.page.waitForSelector(selector, { state: 'visible', timeout: 5000 });
            return true;
        } catch (error) {
            return false;
        }
    }


    


}

