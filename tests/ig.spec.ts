import { test, expect } from '@playwright/test';

test('ig', async ({ page }) => {
  await page.goto('https://www.instagram.com/');
  await page.getByLabel('Phone number, username, or').click();
  await page.getByLabel('Phone number, username, or').fill('niicholaschiiang');
  await page.getByLabel('Phone number, username, or').press('Tab');
  await page.getByLabel('Password').fill('jEsus101!j3sus1o1!');
  await page.getByRole('button', { name: 'Log in', exact: true }).click();
  await page.getByRole('button', { name: 'Not Now' }).click();

  await page.goto('https://www.instagram.com/niicholaschiiang/followers/');

});
