import { test, expect } from "@playwright/test";

test("Go to Fifa's website and check the title", async ({ page }) => {
  await page.goto("https://www.fifa.com/en/home");

  await expect(page).toHaveTitle("FIFA | The Home of Football");
});

test("Check the logo visibility and it's title", async ({ page }) => {
  await page.goto("https://www.fifa.com/en/home");

  const logo = page.locator('a[href="/en/home"] img');

  await expect(logo).toBeVisible();

  await expect(logo).toHaveAttribute("title", "FIFA");
});

test("Verify the navigation links", async ({ page }) => {
  await page.goto("https://www.fifa.com/en/home");

  const validLinks = [
    "TOURNAMENTS",
    "WATCH ON FIFA+",
    "PLAY",
    "SHOP",
    "INSIDE FIFA",
  ];

  const navLinks = page.locator(".global-menu-top-nav_group__hwPpy");

  // waiting to load the navLinks first.
  await expect(navLinks.first()).toBeVisible();

  expect(await navLinks.allInnerTexts()).toEqual(validLinks);
});

// Created a test by using the record option
test("test", async ({ page }) => {
  await page.goto("https://www.fifa.com/en/home");
  await page.locator(".onetrust-pc-dark-filter").click();
  await page.getByRole("button", { name: "I'm OK with that" }).click();
  await page.locator("path").first().click();
  await page.getByText("SHOP").click();
  await page
    .locator("#mainLinksID div")
    .filter({ hasText: /^TICKETS & HOSPITALITY$/ })
    .click();
  const page1Promise = page.waitForEvent("popup");
  await page.getByRole("link", { name: "Explore your options" }).click();
  const page1 = await page1Promise;
  await page1
    .locator("div")
    .filter({ hasText: /^Search$/ })
    .nth(1)
    .click();
  await page1
    .getByRole("searchbox", { name: "News, Players, Matches," })
    .click();
  await page1
    .getByRole("searchbox", { name: "News, Players, Matches," })
    .fill("Players");
  await page1
    .getByRole("searchbox", { name: "News, Players, Matches," })
    .press("Enter");
  const page2Promise = page1.waitForEvent("popup");
  await page1.getByRole("link", { name: "FIFA Young Player Award" }).click();
  const page2 = await page2Promise;
  await page2.getByRole("link", { name: "FIFA", exact: true }).click();
});
