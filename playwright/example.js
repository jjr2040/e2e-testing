const playwright = require('playwright');

(async () => {
  for (const browserType of ['chromium', 'firefox', 'webkit']) {
    const browser = await playwright[browserType].launch();
    
    const context = await browser.newContext();
    const page = await context.newPage('https://angular-6-registration-login-example.stackblitz.io/register');

    page.once('load', async () => {
      await page.screenshot({ path: `./screenshots/example-${browserType}.png` });
      await browser.close();
    });
  }
})();