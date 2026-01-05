import { expect } from "@playwright/test";
import { LandingPage } from "../../pages/landing";
import { Page } from 'playwright';

export async function openSite(page: Page) {
    const landingPage = new LandingPage(page);

    await landingPage.goto();

    const title = await landingPage.getTitleText();
    expect(title).toEqual("Welcome to Restful-Booker")
}