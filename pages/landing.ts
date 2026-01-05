import { Page } from '@playwright/test';

export class LandingPage {
    readonly page: Page;
    readonly titleLocator;
    readonly bookRoomLink;

    constructor(page: Page) {
        this.page = page;
        this.titleLocator = page.locator('h1');
        this.bookRoomLink = page.locator('a[href*="book"]');
    }

    async goto() {
        await this.page.goto('/');
    }

    async getTitleText() {
        return await this.titleLocator.textContent();
    }
}