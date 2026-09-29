import { expect, test } from "@playwright/test";

const SECTIONS = [
  "#home",
  "#about",
  "#skills",
  "#experience",
  "#projects",
  "#publications",
  "#metrics",
] as const;

/**
 * `html { scroll-behavior: smooth }` means anchor clicks animate. Assertions
 * that read layout must wait for scrollY to stop changing, otherwise they
 * sample a mid-flight position and fail intermittently on slower engines.
 */
const settleScroll = async (page: import("@playwright/test").Page) => {
  await page.waitForFunction(
    () =>
      new Promise<boolean>((resolve) => {
        let last = window.scrollY;
        let stable = 0;
        const tick = () => {
          stable = Math.abs(window.scrollY - last) < 0.5 ? stable + 1 : 0;
          last = window.scrollY;
          if (stable >= 3) resolve(true);
          else requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      }),
    null,
    { timeout: 10_000 },
  );
};

test.beforeEach(async ({ page }) => {
  await page.goto("/");
});

test.describe("page structure", () => {
  test("renders the single-page portfolio", async ({ page }) => {
    await expect(page).toHaveTitle(/Prabu Jayant/);

    for (const id of SECTIONS) {
      await expect(page.locator(id)).toHaveCount(1);
    }

    await expect(page.locator("main")).toHaveAttribute("data-reveal", "on");
  });

  test("has no horizontal overflow", async ({ page }) => {
    const scrollWidth = await page.evaluate(
      () => document.documentElement.scrollWidth,
    );
    const clientWidth = await page.evaluate(
      () => document.documentElement.clientWidth,
    );
    expect(scrollWidth).toBeLessThanOrEqual(clientWidth);
  });

  test("exposes complete SEO metadata", async ({ page }) => {
    await expect(page.locator('meta[name="description"]')).toHaveAttribute(
      "content",
      /./,
    );
    await expect(page.locator('meta[property="og:image"]')).toHaveAttribute(
      "content",
      /og\.png/,
    );
    await expect(page.locator('meta[name="twitter:card"]')).toHaveAttribute(
      "content",
      "summary_large_image",
    );
  });

  test("emits valid Person JSON-LD", async ({ page }) => {
    const parsed = await page.evaluate(() => {
      const node = document.querySelector(
        'script[type="application/ld+json"]',
      ) as HTMLScriptElement | null;
      if (!node) return null;
      return JSON.parse(node.textContent ?? "");
    });

    expect(parsed).not.toBeNull();
    expect(parsed?.["@type"]).toBe("Person");
    expect(Array.isArray(parsed?.sameAs)).toBe(true);
  });
});

test.describe("navigation and scroll-spy", () => {
  test("marks the active section in the desktop nav", async ({ page }) => {
    const nav = page.getByRole("navigation", { name: "Primary" });
    await expect(nav).toBeVisible();
    await expect(nav.locator("a").first()).toHaveAttribute(
      "aria-current",
      "true",
    );

    await page.locator("#projects").scrollIntoViewIfNeeded();
    await settleScroll(page);

    await expect(nav.locator('a[href="#projects"]')).toHaveAttribute(
      "aria-current",
      "true",
    );
    await expect(nav.locator('a[href="#home"]')).not.toHaveAttribute(
      "aria-current",
      "true",
    );
  });

  /**
   * Regression: the activation offset used to be a hardcoded 120px, which was
   * smaller than the 144px an anchored section actually rests at
   * (`scroll-padding-top` 80 + `scroll-margin-top` 64). Every nav click
   * therefore left the PREVIOUS item marked active. Asserting one section in
   * isolation missed it — this walks the whole list.
   *
   * `#about` is excluded on purpose: it is nested inside `#home` and shares the
   * same document position, so the two are indistinguishable by scroll offset.
   */
  test("activates the correct nav item for every section", async ({ page }) => {
    const nav = page.getByRole("navigation", { name: "Primary" });
    const navHrefs = await nav
      .locator("a")
      .evaluateAll((links) => links.map((l) => l.getAttribute("href")));
    expect(navHrefs.length).toBeGreaterThan(1);

    for (const href of navHrefs) {
      if (href === "#about") continue;

      await nav.locator(`a[href="${href}"]`).click();
      await settleScroll(page);

      await expect(
        nav.locator(`a[href="${href}"]`),
        `nav should mark ${href} active after clicking it`,
      ).toHaveAttribute("aria-current", "true");
    }
  });

  test("anchor clicks land clear of the fixed header", async ({ page }) => {
    await page.locator("#experience").scrollIntoViewIfNeeded();
    await settleScroll(page);

    await page
      .getByRole("navigation", { name: "Primary" })
      .locator('a[href="#experience"]')
      .click();
    await settleScroll(page);

    const headerHeight = await page
      .locator("header")
      .evaluate((el) => el.getBoundingClientRect().height);

    const headingTop = await page
      .locator("#experience h2")
      .first()
      .evaluate((el) => el.getBoundingClientRect().top);

    expect(headingTop).toBeGreaterThanOrEqual(headerHeight);
  });

  test("mobile menu opens and dismisses on Escape", async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });

    const toggle = page.getByRole("button", { name: "Toggle navigation menu" });
    await expect(toggle).toBeVisible();
    await expect(toggle).toHaveAttribute("aria-expanded", "false");

    await toggle.click();
    const menu = page.getByRole("navigation", { name: "Mobile" });
    await expect(menu).toBeVisible();
    await expect(toggle).toHaveAttribute("aria-expanded", "true");

    await page.keyboard.press("Escape");
    await expect(menu).toBeHidden();
    await expect(toggle).toHaveAttribute("aria-expanded", "false");
  });

  test("mobile menu closes when tapping a link", async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });

    const toggle = page.getByRole("button", { name: "Toggle navigation menu" });
    await toggle.click();
    await page
      .getByRole("navigation", { name: "Mobile" })
      .locator('a[href="#projects"]')
      .click();

    await expect(
      page.getByRole("navigation", { name: "Mobile" }),
    ).toBeHidden();
  });
});

test.describe("accessibility", () => {
  test("all external links are safe", async ({ page }) => {
    const relValues = await page
      .locator('a[target="_blank"]')
      .evaluateAll((links) => links.map((l) => (l as HTMLAnchorElement).rel));

    for (const rel of relValues) {
      expect(rel).toContain("noopener");
    }
  });

  test("images and icons carry accessible names", async ({ page }) => {
    const unlabelledIcons = await page.locator("svg").evaluateAll((svgs) =>
      svgs.filter(
        (s) =>
          !s.hasAttribute("aria-hidden") &&
          !s.hasAttribute("aria-label") &&
          !s.closest("[aria-label]"),
      ).length,
    );
    expect(unlabelledIcons).toBe(0);

    const missingAlt = await page
      .locator("img")
      .evaluateAll((imgs) => imgs.filter((i) => !i.hasAttribute("alt")).length);
    expect(missingAlt).toBe(0);
  });

  test("page has exactly one h1", async ({ page }) => {
    await expect(page.locator("h1")).toHaveCount(1);
  });
});

test.describe("content integrity", () => {
  test("footer social links all resolve to an icon", async ({ page }) => {
    const labels = await page
      .locator("footer a[aria-label]")
      .evaluateAll((links) => links.map((l) => l.getAttribute("aria-label")));

    expect(labels).toContain("GitHub");
    expect(labels).toContain("LinkedIn");
    expect(labels).toContain("Email");

    for (const label of labels) {
      await expect(
        page.locator(`footer a[aria-label="${label}"] svg`),
      ).toHaveCount(1);
    }
  });

  test("renders the MDX narrative block", async ({ page }) => {
    await expect(
      page.getByRole("heading", { name: "Why these projects" }),
    ).toBeVisible();
  });
});
