import { test, expect } from "@playwright/test";

test("has title", async ({ page }) => {
  await page.goto("/");

  await expect(page).toHaveTitle(/Create Next App/);
});

test("has deploy button", async ({ page }) => {
  await page.goto("/");

  await expect(page.getByRole("link", { name: "Deploy now" })).toBeVisible();
});
