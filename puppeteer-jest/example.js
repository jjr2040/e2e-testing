const puppeteer = require('puppeteer');

( async () => {
  const browser = await puppeteer.launch({
    slowMo: 3000
  });
  const page = await browser.newPage();
  
  await page.goto('https://angular-6-registration-login-example.stackblitz.io/register');
  await page.screenshot({ path: './screenshots/login.png' });

  await browser.close();
})();