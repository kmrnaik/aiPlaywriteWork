// @ts-check
import { test, expect } from '@playwright/test';
import { ai } from '@zerostep/playwright';  // Importing Zerostep AI module

// Integrate Zerostep AI with Playwright
//ai.playwrightIntegration(test);   

test('Get the discount price of Tomato using ai assit package', async ({ page }) => {
  const aiArg = {page, test};
  await page.goto('https://rahulshettyacademy.com/seleniumPractise/#/offers');
  const discountPrice = await ai("What is the discount price of Tamoato", aiArg);  // Using Zerostep AI to get discount price
  expect(discountPrice).toBe("26");
});

test('Upload resume on Naukri.com', async ({ page }) => {
  const aiArg = {page, test};
  await page.goto('https://www.naukri.com');

  await page.keyboard.press('Escape'); // Close any pop-ups

  await page.click('text="Login"');
  await page.frameLocator('iframe[title="Login"]').getByText('Sign in with Google').click();

  await page.waitForTimeout(3000); // Wait for Google sign-in window to appear
  await page.fill('aria-label="Email or phone"', 'Test@gmail.com');
  await page.click('text="Next"');
  await page.fill('aria-label="Enter your password"', "---ooooopppp");
  await page.waitForTimeout(3000); // Wait for Google sign-in window to appear
});
